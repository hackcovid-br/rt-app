// https://observablehq.com/@yy/covid-19-confirmed-vs-new-cases@329
import define3 from "./450051d7f1174df8@201.js";
import define2 from "./a33468b95d0b15b0@692.js";
import define1 from "./e93997d5089d7165@2264.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`# COVID-19 Confirmed vs. New cases`
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`A recreation of the visualization by [Aatish Bhatia](https://aatishb.com/covidtrends/) & [minutephysics](https://www.youtube.com/watch?v=54XLXg4fYsc). 

- Data: https://github.com/covid19-data/covid19-data`
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`## Visualization`
    )
  });
  main.variable(observer("viewof y_type")).define("viewof y_type", ["radio"], function (radio) {
    return (
      radio({
        title: 'Show',
        options: [
          { label: "Confirmed cases", value: 'confirmed' },
          { label: "Deaths", value: 'deaths' }
        ],
        value: 'confirmed'
      })
    )
  });
  main.variable(observer("y_type")).define("y_type", ["Generators", "viewof y_type"], (G, _) => G.input(_));
  main.variable(observer("viewof selected_regions")).define("viewof selected_regions", ["checkbox"], function (checkbox) {
    return (
      checkbox({
        title: "Regions",
        options: ["Europe & Central Asia", "North America", "US States", "East Asia & Pacific", "South Asia", "Sub-Saharan Africa", "America & Caribbean", "Middle East & North Africa", "Latin America & Caribbean", "East & North Africa"],
        value: ["Europe & Central Asia", "East Asia & Pacific", "North America"],
      })
    )
  });
  main.variable(observer("selected_regions")).define("selected_regions", ["Generators", "viewof selected_regions"], (G, _) => G.input(_));
  main.variable(observer("viewof curr_date")).define("viewof curr_date", ["Scrubber", "d3"], function (Scrubber, d3) {
    return (
      Scrubber(d3.timeDays(new Date(2020, 0, 22), new Date()), {
        autoplay: true,
        loop: false,
        alternate: false,
        initial: 0,
        format: date => date.toLocaleString("ko-KR", { year: "numeric", month: "numeric", day: "numeric" }),
        delay: 100
      })
    )
  });
  main.variable(observer("curr_date")).define("curr_date", ["Generators", "viewof curr_date"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3", "params", "draw_axes", "draw_trajectories", "draw_date"], function (d3, params, draw_axes, draw_trajectories, draw_date) {
    const svg = d3.create("svg").attr("viewBox", [0, 0, params.width, params.height]);
    draw_axes(svg);
    draw_trajectories(svg);
    draw_date(svg);

    svg.append("text").attr("id", "fullname");

    return svg.node();
  }
  );
  main.variable(observer("swatch")).define("swatch", ["swatches", "color"], function (swatches, color) {
    return (
      swatches({
        color: color
      })
    )
  });
  main.variable(observer("onMouseOver")).define("onMouseOver", ["d3", "code_to_name", "x", "y"], function (d3, code_to_name, x, y) {
    return (
      function onMouseOver() {
        const country_code = d3.select(this).attr("class");
        d3.selectAll(`.${country_code}`).attr("fill-opacity", 1).attr("stroke-opacity", 1).attr("stroke-width", 3)
          .attr("r", 5);

        //const country_circle = d3.select(`circle.${country_code}`);
        //const label_x = country_circle.attr("cx");
        //const label_y = country_circle.attr("cy");

        d3.select("#fullname").text(code_to_name(country_code))
          .style("text-anchor", "start")
          .attr("font-size", 50).attr("fill-opacity", 0.1).attr("fill", "black")
          .attr("font-style", "bold")
          .attr("font-family", "Helvetica, sans-serif")
          .attr("x", x(15)).attr("y", y(1e5));
      }
    )
  });
  main.variable(observer("onMouseOut")).define("onMouseOut", ["d3", "params"], function (d3, params) {
    return (
      function onMouseOut() {
        const country_code = d3.select(this).attr("class");
        d3.selectAll(`.${country_code}`)
          .attr("fill-opacity", params.opac_weak).attr("stroke-opacity", params.opac_weak).attr("stroke-width", 1)
          .attr("r", 3);
        d3.select("#fullname").attr("fill-opacity", 0);
      }
    )
  });
  main.variable(observer("draw_date")).define("draw_date", ["d3", "curr_date", "x", "params", "y"], function (d3, curr_date, x, params, y) {
    return (
      function draw_date(svg) {
        svg.append("g")  // Date
          .append("text").text(d3.timeFormat("%b %d")(curr_date))
          .style("text-anchor", "end")
          .attr("font-size", 100).attr("fill-opacity", 0.1)
          .attr("font-style", "bold")
          .attr("font-family", "Helvetica, sans-serif")
          .attr("x", x(params.xmax)).attr("y", y(params.ymin));
      }
    )
  });
  main.variable(observer("draw_axes")).define("draw_axes", ["xAxis", "yAxis", "grid"], function (xAxis, yAxis, grid) {
    return (
      function draw_axes(svg) {
        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.append("g").call(grid);
      }
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`## Visualization elements`
    )
  });
  main.variable(observer("draw_trajectories")).define("draw_trajectories", ["viz_data", "color", "params", "get_path", "y_type", "onMouseOver", "onMouseOut", "x", "y"], function (viz_data, color, params, get_path, y_type, onMouseOver, onMouseOut, x, y) {
    return (
      function draw_trajectories(svg) {
        svg.append("g").selectAll("path").data(viz_data).join("path")
          .attr("class", d => `${d.country_code}`)
          .attr("stroke", d => color(d.region)).attr("fill", "none")
          .attr("stroke-opacity", params.opac_weak)
          .attr("d", d => get_path(d[y_type]))
          .on("mouseover", onMouseOver).on("mouseout", onMouseOut);

        svg.append("g").selectAll("circle").data(viz_data).join("circle")
          .attr("class", d => `${d.country_code}`)
          .attr("fill", d => color(d.region)).attr("fill-opacity", params.opac_weak)
          .attr("cx", d => x(d[y_type][d[y_type].length - 1][1]))
          .attr("cy", d => y(d[y_type][d[y_type].length - 1][2]))
          .attr("r", 3)
          .on("mouseover", onMouseOver).on("mouseout", onMouseOut);

        const countries_to_label = ['USA', 'ITA', 'CHN', 'KOR', 'IRN', 'SGP', 'GBR',
          'DNK', 'JPN', "CA", "NY", "NJ", "IN", 'ESP', //'DEU', 'FRA','NOR', 
        ]
        svg.append("g").selectAll("text")
          .data(viz_data.filter(d => countries_to_label.includes(d.country_code))).join("text")
          .text(d => d.country_name)
          .attr("class", d => d.country_code)
          .attr("fill", d => color(d.region)).attr("fill-opacity", params.opac_weak)
          .attr("x", d => x(d[y_type][d[y_type].length - 1][1]))
          .attr("y", d => y(d[y_type][d[y_type].length - 1][2]))
          .on("mouseover", onMouseOver).on("mouseout", onMouseOut);
      }
    )
  });
  main.variable(observer("get_path")).define("get_path", ["d3", "x", "y"], function (d3, x, y) {
    return (
      function get_path(d) {
        const l = d3.line();
        return l(d.filter(d => (d[1] > 10 && d[2] > 10)).map(d => [x(d[1]), y(d[2])]))
      }
    )
  });
  main.variable(observer("grid")).define("grid", ["x", "params", "y"], function (x, params, y) {
    return (
      g => g
        .attr("stroke", "currentColor")
        .attr("stroke-opacity", 0.1)
        .call(g => g.append("g")
          .selectAll("line")
          .data(x.ticks())
          .join("line")
          .attr("x1", d => 0.5 + x(d))
          .attr("x2", d => 0.5 + x(d))
          .attr("y1", params.margin.top)
          .attr("y2", params.height - params.margin.bottom))
        .call(g => g.append("g")
          .selectAll("line")
          .data(y.ticks())
          .join("line")
          .attr("y1", d => 0.5 + y(d))
          .attr("y2", d => 0.5 + y(d))
          .attr("x1", params.margin.left)
          .attr("x2", params.width - params.margin.right))
    )
  });
  main.variable(observer("yAxis")).define("yAxis", ["params", "d3", "y", "y_type"], function (params, d3, y, y_type) {
    return (
      g => g
        .attr("transform", `translate(${params.margin.left},0)`)
        .call(d3.axisLeft(y).ticks(params.height / 90, ","))
        .call(g => g.append("text")
          .attr("font-size", 15)
          .attr("x", -params.margin.left)
          .attr("y", params.margin.top - 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(`↑ New ${y_type} (past week)`))
    )
  });
  main.variable(observer("y")).define("y", ["d3", "params"], function (d3, params) {
    return (
      d3.scaleLog([params.ymin, params.ymax], [params.height - params.margin.bottom, params.margin.top])
    )
  });
  main.variable(observer("xAxis")).define("xAxis", ["params", "d3", "x", "y_type"], function (params, d3, x, y_type) {
    return (
      g => g
        .attr("transform", `translate(0,${params.height - params.margin.bottom})`)
        .call(d3.axisBottom(x).ticks(params.width / 80, ","))
        .call(g => g.append("text")
          .attr("font-size", 15)
          .attr("x", params.width)
          .attr("y", params.margin.bottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(`Total ${y_type} →`))
    )
  });
  main.variable(observer("x")).define("x", ["d3", "params"], function (d3, params) {
    return (
      d3.scaleLog([params.xmin, params.xmax], [params.margin.left, params.width - params.margin.right])
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`## Visualization parameters`
    )
  });
  main.variable(observer("color")).define("color", ["d3", "cntry_data_raw", "us_state_data"], function (d3, cntry_data_raw, us_state_data) {
    return (
      d3.scaleOrdinal(cntry_data_raw.concat(us_state_data).map(d => d.region), d3.schemeCategory10).unknown("black")
    )
  });
  main.variable(observer("params")).define("params", function () {
    return (
      {
        width: 800,
        height: 500,
        opac_weak: 0.5,
        margin: ({ top: 25, right: 35, bottom: 35, left: 60 }),
        xmin: 10,
        xmax: 1e6,
        ymin: 10,
        ymax: 1e6,
      }
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`## Data`
    )
  });
  main.variable(observer("code_to_name")).define("code_to_name", ["data"], function (data) {
    return (
      function code_to_name(country_code) {
        return data.find(d => d.country_code === country_code).country_name;
      }
    )
  });
  main.variable(observer("viz_data")).define("viz_data", ["data", "curr_date"], function (data, curr_date) {
    return (
      data.map(function (d) {
        return {
          'country_code': d.country_code,
          'country_name': d.country_name,
          'population': d.population,
          'region': d.region,
          'confirmed': d.confirmed.filter(d => new Date(d[0]) < curr_date),
          'deaths': d.deaths.filter(d => new Date(d[0]) < curr_date),
        }
      })
    )
  });
  main.variable(observer("last_index")).define("last_index", ["data"], function (data) {
    return (
      data[0].confirmed.length - 1
    )
  });
  main.variable(observer("data")).define("data", ["cntry_data_raw", "us_state_data", "selected_regions", "add_past_week_number"], function (cntry_data_raw, us_state_data, selected_regions, add_past_week_number) {
    return (
      cntry_data_raw.concat(us_state_data).filter(d => selected_regions.includes(d.region)).map(function (d) {
        d.confirmed = add_past_week_number(d.confirmed);
        d.deaths = add_past_week_number(d.deaths);
        return d;
      })
    )
  });
  main.variable(observer("add_past_week_number")).define("add_past_week_number", ["d3"], function (d3) {
    return (
      function add_past_week_number(a) {
        var new_array = [[a[0][0], a[0][1], a[0][1]]];
        var curr_sum = 0;
        var min_idx = 0;
        for (var i = 1; i < a.length; i++) {
          min_idx = d3.max([0, i - 7]);
          if (min_idx != 0) {
            curr_sum = a[i][1] - a[min_idx][1];
          } else {
            curr_sum = a[i][1];
          }
          new_array.push([a[i][0], a[i][1], curr_sum])
        }
        return new_array;
      }
    )
  });
  main.variable(observer("ts_diff")).define("ts_diff", function () {
    return (
      function ts_diff(a) {
        var new_array = [];
        new_array.push([a[0][0], a[0][1]]);
        for (var i = 1; i < a.length; i++)  new_array.push([a[i][0], a[i][1] - a[i - 1][1]])
        return new_array;
      }
    )
  });
  main.variable(observer("us_state_data")).define("us_state_data", ["us_state_data_raw"], function (us_state_data_raw) {
    return (
      us_state_data_raw.map(d => ({
        'country_code': d.code,
        'country_name': d.name,
        'region': "US States",
        'confirmed': d.confirmed,
        'deaths': d.deaths,
      }))
    )
  });
  main.variable(observer("us_state_data_raw")).define("us_state_data_raw", ["d3"], function (d3) {
    return (
      d3.json("https://raw.githubusercontent.com/covid19-data/covid19-data/master/output/us_state_nyt.json")
    )
  });
  main.variable(observer("cntry_data_raw")).define("cntry_data_raw", ["d3"], function (d3) {
    return (
      d3.json("https://raw.githubusercontent.com/covid19-data/covid19-data/master/output/cntry_stat_owid.json")
    )
  });
  main.variable(observer()).define(["md"], function (md) {
    return (
      md`## Import`
    )
  });
  const child1 = runtime.module(define1);
  main.import("autoSelect", child1);
  const child2 = runtime.module(define2);
  main.import("swatches", child2);
  const child3 = runtime.module(define3);
  main.import("Scrubber", child3);
  const child4 = runtime.module(define1);
  main.import("checkbox", child4);
  const child5 = runtime.module(define1);
  main.import("radio", child5);
  main.variable(observer("d3")).define("d3", ["require"], function (require) {
    return (
      require.alias({
        "d3": "d3@5",
        "d3-regression": "d3-regression@1",
      })("d3", "d3-regression")
    )
  });
  return main;
}
