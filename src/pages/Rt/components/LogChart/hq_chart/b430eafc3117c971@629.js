// https://observablehq.com/@lucasrla/covid-19-casos-e-mortes-no-brasil@629
import define3 from "./a33468b95d0b15b0@692.js"
import define2 from "./e93997d5089d7165@2264.js"
import define1 from "./f4098a3a05f706f0@329.js"

export default function define(runtime, observer) {
  const main = runtime.module()
  main.variable(observer()).define(["md"], function(md) {
    return md`
# COVID-19 Casos e Mortes no Brasil`
  })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Evolução por Estado`
  })
  main
    .variable(observer("viewof y_type"))
    .define("viewof y_type", ["radio"], function(radio) {
      return radio({
        title: "Exibir:",
        options: [
          { label: "Casos Reportados", value: "confirmed" },
          { label: "Mortes Reportadas", value: "deaths" },
        ],
        value: "deaths",
      })
    })
  main
    .variable(observer("y_type"))
    .define("y_type", ["Generators", "viewof y_type"], (G, _) => G.input(_))
  main
    .variable(observer("viewof pivot_n"))
    .define("viewof pivot_n", ["slider", "pivot_values"], function(
      slider,
      pivot_values
    ) {
      return slider({
        title: "Considerar valores a partir de:",
        min: 0,
        max: pivot_values.length - 1,
        step: 1,
        value: 0,
        format: v => `${pivot_values[v]}`,
        //  description: "Days since ? cases"
      })
    })
  main
    .variable(observer("pivot_n"))
    .define("pivot_n", ["Generators", "viewof pivot_n"], (G, _) => G.input(_))
  main
    .variable(observer("viewof num_days"))
    .define("viewof num_days", ["slider"], function(slider) {
      return slider({
        title: "Período de tempo a ser considerado:",
        min: 20,
        max: 100,
        step: 1,
        value: 65,
        format: v => `${v} dias`,
        //  description: "Days since ? cases"
      })
    })
  main
    .variable(observer("num_days"))
    .define("num_days", ["Generators", "viewof num_days"], (G, _) => G.input(_))
  main
    .variable(observer("viewof doubling_periods"))
    .define("viewof doubling_periods", ["checkbox"], function(checkbox) {
      return checkbox({
        title: "Retas pontilhadas (guias):",
        options: [
          { value: 1, label: "A cada 1 dia" },
          { value: 2, label: "A cada 2 dias" },
          { value: 3, label: "A cada 3 dias" },
          { value: 4, label: "A cada 4 dias" },
          { value: 5, label: "A cada 5 dias" },
          { value: 6, label: "A cada 6 dias" },
          { value: 7, label: "A cada semana" },
        ],

        value: [1, 2, 3, 4, 7],
      })
    })
  main
    .variable(observer("doubling_periods"))
    .define(
      "doubling_periods",
      ["Generators", "viewof doubling_periods"],
      (G, _) => G.input(_)
    )
  main
    .variable(observer("viewof selected_regions"))
    .define("viewof selected_regions", ["checkbox"], function(checkbox) {
      return checkbox({
        title: "Regiões:",
        options: ["N", "NE", "CO", "SE", "S"],
        value: ["N", "NE", "CO", "SE", "S"],
      })
    })
  main
    .variable(observer("selected_regions"))
    .define(
      "selected_regions",
      ["Generators", "viewof selected_regions"],
      (G, _) => G.input(_)
    )
  main
    .variable(observer("swatch"))
    .define("swatch", ["swatches", "color"], function(swatches, color) {
      return swatches({
        color: color,
      })
    })
  main
    .variable(observer("chart"))
    .define(
      "chart",
      ["d3", "params", "draw_axes", "draw_doubling_lines", "draw_trajectories"],
      function(d3, params, draw_axes, draw_doubling_lines, draw_trajectories) {
        const svg = d3
          .create("svg")
          .attr("viewBox", [0, 0, params.width, params.height])
        draw_axes(svg)
        draw_doubling_lines(svg)
        draw_trajectories(svg)

        svg.append("text").attr("id", "fullname")

        return svg.node()
      }
    )
  main
    .variable(observer("onMouseOver"))
    .define("onMouseOver", ["d3", "code_to_name", "x", "params", "y"], function(
      d3,
      code_to_name,
      x,
      params,
      y
    ) {
      return function onMouseOver() {
        const code = d3.select(this).attr("class")
        d3.selectAll(`.${code}`)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1)
          .attr("stroke-width", 2)
          .attr("r", 5)

        d3.select("#fullname")
          .text(code_to_name(code))
          .style("text-anchor", "end")
          .attr("font-size", 24)
          .attr("fill-opacity", 1)
          .attr("fill", "gray")
          .attr("font-style", "bold")
          .attr("font-family", "Helvetica, sans-serif")
          .attr("x", x(params.xmax))
          .attr("y", y(params.ymin) - 20)

        // const circle = d3.select(`circle.${code}`);

        //d3.select("#guides").attr("transform", `translate(${circle.attr("cx")} ${-circle.attr("cy")})`)
      }
    })
  main
    .variable(observer("onMouseOut"))
    .define("onMouseOut", ["d3", "params"], function(d3, params) {
      return function onMouseOut() {
        const code = d3.select(this).attr("class")
        d3.selectAll(`.${code}`)
          .attr("fill-opacity", params.opac_weak)
          .attr("stroke-opacity", params.opac_weak)
          .attr("stroke-width", 1)
          .attr("r", 3)
        d3.select("#fullname").attr("fill-opacity", 0)
        d3.select("#guides").attr("transform", `translate(0 0)`)
      }
    })
  main
    .variable(observer("draw_axes"))
    .define("draw_axes", ["xAxis", "yAxis"], function(xAxis, yAxis) {
      return function draw_axes(svg) {
        svg.append("g").call(xAxis)
        svg.append("g").call(yAxis)
      }
    })
  main
    .variable(observer("draw_trajectories"))
    .define(
      "draw_trajectories",
      [
        "viz_data",
        "color",
        "params",
        "get_path",
        "onMouseOver",
        "onMouseOut",
        "x",
        "y",
        "d3",
      ],
      function(
        viz_data,
        color,
        params,
        get_path,
        onMouseOver,
        onMouseOut,
        x,
        y,
        d3
      ) {
        return function draw_trajectories(svg) {
          svg
            .append("g")
            .selectAll("path")
            .data(viz_data)
            .join("path")
            .attr("class", d => `${d.state_code}`)
            .attr("stroke", d => color(d.region))
            .attr("fill", "none")
            .attr("stroke-opacity", params.opac_weak)
            .attr("d", d => get_path(d.shifted))
            .on("mouseover", onMouseOver)
            .on("mouseout", onMouseOut)

          svg
            .append("g")
            .selectAll("circle")
            .data(viz_data)
            .join("circle")
            .attr("class", d => `${d.state_code}`)
            .attr("fill", d => color(d.region))
            .attr("fill-opacity", params.opac_weak)
            .attr("cx", d => x(d.shifted.length - 1))
            .attr("cy", d => y(d.shifted[d.shifted.length - 1]))
            .attr("r", 3)
            .on("mouseover", onMouseOver)
            .on("mouseout", onMouseOut)

          svg
            .append("g")
            .selectAll("text")
            .data(viz_data)
            .join("text")
            .text(d => d.state_code)
            .attr("font-size", 10)
            .attr("font-family", "Helvetica, sans-serif")
            .attr("class", d => d.state_code)
            .attr("fill", d => color(d.region))
            .attr("fill-opacity", params.opac_weak)
            .attr("x", d =>
              d3.min([x(d.shifted.length - 1) + 4, x(params.xmax) - 10])
            )
            .attr("y", d => y(d.shifted[d.shifted.length - 1]))
            .on("mouseover", onMouseOver)
            .on("mouseout", onMouseOut)
        }
      }
    )
  main
    .variable(observer("draw_doubling_lines"))
    .define(
      "draw_doubling_lines",
      [
        "doubling_periods",
        "d3",
        "x",
        "y",
        "params",
        "doubling_period_labels",
        "get_text_rotation_angle",
      ],
      function(
        doubling_periods,
        d3,
        x,
        y,
        params,
        doubling_period_labels,
        get_text_rotation_angle
      ) {
        return function draw_doubling_lines(svg) {
          // (0, params.ymin) -> (params.xmax, Math.pow(2, params.ymin*params.xmax/period))
          // every day doubling -> (1, params.ymin*2), (2, params.ymin*2*2), ...
          svg
            .append("g")
            .attr("id", "guides")
            .selectAll("path")
            .data(doubling_periods)
            .join("path")
            .attr("class", "guidelines")
            .attr("stroke", "gray")
            .attr("stroke-opacity", 0.3)
            .attr("stroke-dasharray", 1)
            .attr("d", d =>
              d3.line()([
                [x(0), y(params.ymin)],
                [x(params.xmax), y(params.ymin * Math.pow(2, params.xmax / d))],
              ])
            )

          svg
            .append("g")
            .selectAll("text")
            .data(doubling_period_labels)
            .join("text")
            .text(d =>
              d.period > 1
                ? `Dobrando a cada ${d.period} dias`
                : "Dobrando todo dia"
            )
            .style("text-anchor", "end")
            .attr("font-size", 10)
            .attr("font-family", "Helvetica, sans-serif")
            .attr("fill", "gray")
            .attr("fill-opacity", 0.3)
            .attr(
              "transform",
              d =>
                `rotate(${get_text_rotation_angle(d.period)} ${x(d.x)} ${y(
                  d.y
                )})`
            )
            .attr("x", d => x(d.x))
            .attr("y", d => y(d.y))
        }
      }
    )
  main
    .variable(observer("doubling_period_labels"))
    .define("doubling_period_labels", ["doubling_periods", "params"], function(
      doubling_periods,
      params
    ) {
      return doubling_periods.map(function(d) {
        d = Number(d)
        const candidate_n = params.xmax / d
        const candidate_y = Math.pow(2, candidate_n) * params.ymin
        if (candidate_y < params.ymax) {
          return { period: d, x: params.xmax, y: candidate_y }
        } else {
          return {
            period: d,
            x: Math.log2(params.ymax / params.ymin) * d,
            y: params.ymax,
          }
        }
      })
    })
  main
    .variable(observer("get_path"))
    .define("get_path", ["d3", "x", "y"], function(d3, x, y) {
      return function get_path(d) {
        const l = d3.line()
        return l(
          d.map(function(e, i) {
            return [x(i), y(e)]
          })
        )
      }
    })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Visualization parameters`
  })
  main
    .variable(observer("color"))
    .define("color", ["d3", "data"], function(d3, data) {
      return d3
        .scaleOrdinal(
          data.map(d => d.region),
          d3.schemeCategory10
        )
        .unknown("black")
    })
  main
    .variable(observer("params"))
    .define("params", ["pivot", "num_days"], function(pivot, num_days) {
      return {
        width: 600,
        height: 400,
        margin: { top: 30, right: 35, bottom: 35, left: 65 },
        ymin: pivot,
        ymax: 1e5,
        xmin: 0,
        xmax: num_days,
        opac_weak: 0.6,
      }
    })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Basic visualization elements`
  })
  main
    .variable(observer("yAxis"))
    .define("yAxis", ["params", "d3", "y", "y_type"], function(
      params,
      d3,
      y,
      y_type
    ) {
      return g =>
        g
          .attr("transform", `translate(${params.margin.left},0)`)
          .call(d3.axisLeft(y).ticks(params.height / 80, ","))
          .call(g =>
            g
              .append("text")
              .attr("font-size", 12)
              .attr("x", -params.margin.left)
              .attr("y", params.margin.top - 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(`↑ Valores (# ${y_type}, escala log)`)
          )
    })
  main
    .variable(observer("y"))
    .define("y", ["d3", "params"], function(d3, params) {
      return d3.scaleLog(
        [params.ymin, params.ymax],
        [params.height - params.margin.bottom, params.margin.top]
      )
    })
  main
    .variable(observer("xAxis"))
    .define("xAxis", ["params", "d3", "x", "width"], function(
      params,
      d3,
      x,
      width
    ) {
      return g =>
        g
          .attr(
            "transform",
            `translate(0,${params.height - params.margin.bottom})`
          )
          .call(d3.axisBottom(x).ticks(width / 80))
          .call(g =>
            g
              .append("text")
              .attr("x", params.width)
              .attr("y", params.margin.bottom - 4)
              .attr("font-size", 12)
              .attr("fill", "currentColor")
              .attr("text-anchor", "end")
              .text(`Dias →`)
          )
    })
  main
    .variable(observer("x"))
    .define("x", ["d3", "params"], function(d3, params) {
      return d3
        .scaleLinear()
        .domain([params.xmin, params.xmax])
        .range([params.margin.left, params.width - params.margin.right])
    })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Data helpers`
  })
  main
    .variable(observer("get_text_rotation_angle"))
    .define("get_text_rotation_angle", ["y", "params", "x"], function(
      y,
      params,
      x
    ) {
      return function get_text_rotation_angle(doubling_period) {
        const radians = 0.0174532925
        return (
          -Math.atan(
            (y(params.ymin) - y(params.ymin * 2)) / (x(doubling_period) - x(0))
          ) / radians
        )
      }
    })
  main
    .variable(observer("code_to_name"))
    .define("code_to_name", ["data"], function(data) {
      return function code_to_name(state_code) {
        return data.find(d => d.state_code === state_code).state_name
      }
    })
  main
    .variable(observer("viz_data"))
    .define(
      "viz_data",
      ["data", "selected_regions", "y_type", "pivot", "pivot_bisector"],
      function(data, selected_regions, y_type, pivot, pivot_bisector) {
        return data
          .filter(d => selected_regions.includes(d.region))
          .filter(d => {
            const last_index = d[y_type].length - 1
            return d[y_type][last_index][1] > pivot
          })
          .map(function(d) {
            const start_idx = pivot_bisector.right(d[y_type], pivot)

            d["shifted"] = d[y_type].slice(start_idx).map(d => d[1])
            return d
          })
      }
    )
  main
    .variable(observer("pivot_bisector"))
    .define("pivot_bisector", ["d3"], function(d3) {
      return d3.bisector(d => d[1])
    })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Data`
  })
  main
    .variable(observer("pivot"))
    .define("pivot", ["pivot_values", "pivot_n"], function(
      pivot_values,
      pivot_n
    ) {
      return pivot_values[pivot_n]
    })
  main.variable(observer("pivot_values")).define("pivot_values", function() {
    return [
      1,
      5,
      10,
      50,
      100,
      200,
      500,
      1000,
      2000,
      5000,
      10000,
      13000,
      15000,
      20000,
      50000,
      100000,
    ]
  })
  main
    .variable(observer("data"))
    .define("data", ["data_raw", "past_week"], function(data_raw, past_week) {
      return data_raw.map(function(d) {
        d.confirmed_fraction = d.confirmed.map(x => [x[0], x[1] / d.population])
        d.confirmed_lastweek = past_week(d.confirmed)
        d.deaths_lastweek = past_week(d.deaths)
        return d
      })
    })
  main
    .variable(observer("past_week"))
    .define("past_week", ["d3"], function(d3) {
      return function past_week(a) {
        var new_array = [[a[0][0], a[0][1]]]
        var curr_sum = 0
        var min_idx = 0
        for (var i = 1; i < a.length; i++) {
          min_idx = d3.max([0, i - 7])
          if (min_idx != 0) {
            curr_sum = a[i][1] - a[min_idx][1]
          } else {
            curr_sum = a[i][1]
          }
          new_array.push([a[i][0], curr_sum])
        }
        return new_array
      }
    })
  main.variable(observer("data_raw")).define("data_raw", ["d3"], function(d3) {
    return d3.json(
      "https://raw.githubusercontent.com/lucasrla/covid-19-brasil/master/state_summary.json"
    )
  })
  main.variable(observer()).define(["md"], function(md) {
    return md`
## Import`
  })
  const child1 = runtime.module(define1)
  main.import("add_past_week_number", child1)
  const child2 = runtime.module(define1)
  main.import("ts_diff", child2)
  const child3 = runtime.module(define2)
  main.import("checkbox", child3)
  const child4 = runtime.module(define3)
  main.import("swatches", child4)
  const child5 = runtime.module(define2)
  main.import("radio", child5)
  const child6 = runtime.module(define2)
  main.import("slider", child6)
  main.variable(observer("d3")).define("d3", ["require"], function(require) {
    return require.alias({
      d3: "d3@5",
      "d3-regression": "d3-regression@1",
    })("d3", "d3-regression")
  })
  return main
}
