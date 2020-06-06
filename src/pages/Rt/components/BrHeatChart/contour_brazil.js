// https://observablehq.com/@bernaferrari/brazil-contour-covid-19-map@2144
import * as d3 from "d3";
import * as topojson from "topojson-client";

import { parseDataCityCovid, getDataCityCovid, getMapFrom } from "../../utils/fetcher.ts";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`# Brazil Contour COVID-19 map

*Fonte: [covid19-br](https://brasil.io/api/dataset/covid19)*`
    )
  });
  main.variable(observer("map")).define("map", ["d3", "DOM", "w", "h", "statesOuter", "path", "contours", "thresholdColorScale", "statesInner"], function (d3, DOM, w, h, statesOuter, path, contours, thresholdColorScale, statesInner) {
    const svg = d3
      .create("svg")
      // .attr("width", w)
      // .attr("height", h)
      .attr("viewBox", [0, 0, w, h])
      .attr("class", "italy");

    svg.append("path")
      .datum(statesOuter)
      .attr("class", "outer")
      .attr("d", path)
      .attr("id", "brPath");

    svg.append("clipPath")
      .attr("id", "contourBrazilClipPath")
      .append("use")
      .attr("xlink:href", "#brPath");

    const g = svg.append("g")
      .selectAll(".contour")
      .data(contours)
      .join("g");

    g.append("path")
      .attr("clip-path", "url(#contourBrazilClipPath)")
      .attr("class", d => `contour ${(d.value)}`)
      .attr("d", d3.geoPath())
      // .attr("stroke-width", (d, i) => i % 5 ? 0.25 : 1)
      // .style("stroke", "white")  
      .attr("fill", d => thresholdColorScale(d.value));

    svg
      .append("path")
      .datum(statesInner)
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("strokeWidth", "1px")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

    return svg.node();
  }
  );
  main.variable(observer("contour")).define("contour", ["d3", "w", "h"], function (d3, w, h) {
    return (
      d3.contourDensity()
        .x(d => d[0])
        .y(d => d[1])
        .size([w, h])
        .cellSize(2)
        .bandwidth(15)
    )
  });
  main.variable(observer("rawPoints")).define("rawPoints", ["d3"], function (d3) {
    // return recentData.map(d => [d.longitude, d.latitude, d.city_ibge_code]);

    // return climateFeatures.map(d => projection.invert(path.centroid(d)));
    const lats = d3.range(-34, 5.23, 2);

    // range latitudes from -130 (W) to -60 (E) for every 1 degree
    const lons = d3.range(-74, -34.25, 2);

    // long / lat points in order from west to east, then north to south, like a wrap
    return lons.map((lon, i) => lats.map(lat => [lon, lat])).flat()
  }
  );
  main.variable(observer("between")).define("between", function () {
    return (
      function between(num, a, b) {
        var min = Math.min(a, b), max = Math.max(a, b);
        return num >= min && num <= max;
      }
    )
  });
  main.variable(observer("filtered_raw_pointer")).define("filtered_raw_pointer", ["rawPoints", "recentData", "between"], function (rawPoints, recentData, between) {
    return (
      rawPoints.map(d => {
        const results = recentData.filter(dd => between(dd["longitude"], d[0] - 2, d[0] + 2) && between(dd["latitude"], d[1] - 2, d[1] + 2));

        if (results.length === 0) {
          return 0;
        } else {
          return results.reduce((acc, data) => acc + data.confirmed, 0);
        }
      })
    )
  });
  main.variable(observer("voronoiLookup")).define("voronoiLookup", ["filtered_raw_pointer"], function (filtered_raw_pointer) {
    return (
      new Map(filtered_raw_pointer.map((d, i) => [i, d]))
    )
  });
  main.variable(observer("maxValue")).define("maxValue", ["filtered_raw_pointer"], function (filtered_raw_pointer) {
    return (
      Math.max.apply(Math, filtered_raw_pointer)
    )
  });
  main.variable(observer("geojson")).define("geojson", ["rawPoints"], function (rawPoints) {
    return (
      rawPoints.map((d, i) => {
        return {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": d
          },
          "properties": {
            "index": i
          }
        }
      })
    )
  });
  main.variable(observer("gridPoints")).define("gridPoints", ["rawPoints", "projection", "get_point_data"], function (rawPoints, projection, get_point_data) {
    return (
      rawPoints.map((point, i) => ({
        'centroid': projection(point),
        'data': get_point_data(point, i)
      })).filter(d => d.centroid !== null && d.data !== null)
    )
  });
  main.variable(observer("newscale")).define("newscale", ["d3", "temp_values_domain"], function (d3, temp_values_domain) {
    return (
      d3.scaleSymlog()
        .domain(temp_values_domain)
        .range([0, 1])
    )
  });
  main.variable(observer("contour_data")).define("contour_data", ["gridPoints"], function (gridPoints) {
    return (
      gridPoints.reduce((acc, data) => {

        // calculate the number of points based on the temp change value, down to 0.1.
        const num_points = Math.ceil(Math.sqrt(Math.abs(data.data)));

        // create an array of that same value repeated to create stacked points tied to the data value
        const array = new Array(num_points).fill(data.centroid, 0, num_points)

        return [...acc, ...array]
      }, [])
    )
  });
  main.variable(observer("contours")).define("contours", ["contour", "contour_data"], function (contour, contour_data) {
    return (
      contour(contour_data)
    )
  });
  main.variable(observer("colors")).define("colors", function () {
    return (
      ["#023858", "#045a8d", "#0570b0", "#3690c0", "#74a9cf", "#a6bddb", "#d0d1e6", "#fff", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
    )
  });
  main.variable(observer("density_thresholds")).define("density_thresholds", ["contours"], function (contours) {
    return (
      contours.map(d => +d.value)
    )
  });
  main.variable(observer("zero_estimation_index")).define("zero_estimation_index", function () {
    return (
      0
    )
  });
  main.variable(observer("quantz")).define("quantz", ["d3", "linearColorScale", "density_thresholds", "zero_estimation_index"], function (d3, linearColorScale, density_thresholds, zero_estimation_index) {
    return (
      d3.quantize(linearColorScale, (density_thresholds.length - zero_estimation_index) * 2)
    )
  });
  main.variable(observer("thresholdColorScale")).define("thresholdColorScale", ["d3", "density_thresholds", "quantz", "threshold_index_domain"], function (d3, density_thresholds, quantz, threshold_index_domain) {
    return (
      d3.scaleOrdinal()
        .domain(density_thresholds)
        .range(quantz.slice(-threshold_index_domain.length))
    )
  });
  main.variable(observer("threshold_index_domain")).define("threshold_index_domain", ["d3", "zero_estimation_index", "density_thresholds"], function (d3, zero_estimation_index, density_thresholds) {
    return (
      d3.range(-zero_estimation_index, density_thresholds.length - zero_estimation_index, 1)
    )
  });
  main.variable(observer("linearColorScale")).define("linearColorScale", ["d3", "colors"], function (d3, colors) {
    return (
      d3.scaleLinear()
        .domain(d3.range(0, 1, 1 / colors.length))
        .range(colors)
        .interpolate(d3.interpolateLab)
    )
  });
  main.variable(observer("temp_values_domain")).define("temp_values_domain", ["maxValue"], function (maxValue) {
    return (
      [0, maxValue]
    )
  });
  main.variable(observer("get_point_data")).define("get_point_data", ["d3", "provinces", "voronoiLookup"], function (d3, provinces, voronoiLookup) {
    return (
      (d, i) => {
        let data = null;

        // this limits the data to the regions in or close to the US.
        if (d3.geoContains(provinces, d)) {
          let voronoi = voronoiLookup.get(i);
          data = voronoi;
        }

        return data
      }
    )
  });
  main.variable(observer("statesOuter")).define("statesOuter", ["topojson", "brasil"], function (topojson, brasil) {
    return (
      topojson.mesh(brasil, brasil.objects.Brasil, (a, b) => a === b)
    )
  });
  main.variable(observer("statesInner")).define("statesInner", ["topojson", "brasil"], function (topojson, brasil) {
    return (
      topojson.mesh(brasil, brasil.objects.Brasil, (a, b) => a !== b)
    )
  });
  main.variable(observer("w")).define("w", ["width"], function (width) {
    return (
      Math.min(width, 700)
    )
  });
  main.variable(observer("h")).define("h", function () {
    return (
      600
    )
  });
  main
    .variable(observer("data"))
    .define("data", ["data_city_covid"], async function (
      data_city_covid
    ) {
      return await parseDataCityCovid(data_city_covid, false);
    });
  main
    .variable(observer("data_city_covid"))
    .define("data_city_covid", [], async function () {
      return await getDataCityCovid(null, null);
    });
  main.variable(observer("recentData")).define("recentData", ["data"], function (data) {
    return (
      data[data.length - 1]
    )
  });
  main.variable(observer("parseDate")).define("parseDate", ["d3"], function (d3) {
    return (
      d3.utcParse("%Y-%m-%d")
    )
  });
  main.variable(observer("provinces")).define("provinces", ["topojson", "brasil"], function (topojson, brasil) {
    return (
      topojson.feature(brasil, brasil.objects.Brasil)
    )
  });
  main.variable(observer("path")).define("path", ["d3", "projection"], function (d3, projection) {
    return (
      d3.geoPath().projection(projection)
    )
  });
  main.variable(observer("projection")).define("projection", ["d3", "w", "h", "statesOuter"], function (d3, w, h, statesOuter) {
    return (
      d3.geoMercator()
        .fitExtent([
          [20, 0],
          [w - 20, h],
        ], statesOuter)
    )
  });
  main.variable(observer("places")).define("places", function () {
    return (
      {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: { name: "Curitiba" },
            geometry: { type: "Point", coordinates: [-49.2646, -25.4195] }
          },
          {
            type: "Feature",
            properties: { name: "São Paulo" },
            geometry: { type: "Point", coordinates: [-46.6395, -23.5329] }
          },
          {
            type: "Feature",
            properties: { name: "Rio de Janeiro" },
            geometry: { type: "Point", coordinates: [-43.2003, -22.9129] }
          },
          {
            type: "Feature",
            properties: { name: "Fortaleza" },
            geometry: { type: "Point", coordinates: [-38.5423, -3.71664] }
          },
          {
            type: "Feature",
            properties: { name: "Manaus" },
            geometry: { type: "Point", coordinates: [-60.0212, -3.11866] }
          },
          {
            type: "Feature",
            properties: { name: "Brasília" },
            geometry: { type: "Point", coordinates: [-47.9297, -15.7795] }
          },
          {
            type: "Feature",
            properties: { name: "Recife" },
            geometry: { type: "Point", coordinates: [-34.8771, -8.04666] }
          },
          {
            type: "Feature",
            properties: { name: "Salvador" },
            geometry: { type: "Point", coordinates: [-38.5011, -12.9718] }
          },
          {
            type: "Feature",
            properties: { name: "Porto Alegre" },
            geometry: { type: "Point", coordinates: [-51.2065, -30.0318] }
          },
          {
            type: "Feature",
            properties: { name: "Belo Horizonte" },
            geometry: { type: "Point", coordinates: [-43.9266, -19.9102] }
          },
        ]
      }
    )
  });
  main.variable(observer("brasil")).define("brasil", async function () {
    return await getMapFrom("br");
  });
  main.variable(observer("topojson")).define("topojson", topojson);
  main.variable(observer("d3")).define("d3", d3);
  return main;
}
