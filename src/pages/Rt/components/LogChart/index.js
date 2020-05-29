import { Runtime, Inspector } from "@observablehq/runtime";
import React, { Component } from "react";

import notebook from "./hq_chart/index";

class LogChart extends Component {
  componentDidMount() {
    (new Runtime).module(notebook, name => {
      if (name === "viewof y_type") return Inspector.into("#observablehq-6f9bb56e .observablehq-viewof-y_type")();
      if (name === "viewof pivot_n") return Inspector.into("#observablehq-6f9bb56e .observablehq-viewof-pivot_n")();
      if (name === "viewof num_days") return Inspector.into("#observablehq-6f9bb56e .observablehq-viewof-num_days")();
      if (name === "viewof doubling_periods") return Inspector.into("#observablehq-6f9bb56e .observablehq-viewof-doubling_periods")();
      if (name === "viewof selected_regions") return Inspector.into("#observablehq-6f9bb56e .observablehq-viewof-selected_regions")();
      if (name === "swatch") return Inspector.into("#observablehq-6f9bb56e .observablehq-swatch")();
      if (name === "chart") return Inspector.into("#observablehq-6f9bb56e .observablehq-chart")();
    })
  }

  render() {
    return (
      <div id="observablehq-6f9bb56e">
        <div className="observablehq-viewof-y_type"></div>
        <div className="observablehq-viewof-pivot_n"></div>
        <div className="observablehq-viewof-num_days"></div>
        <div className="observablehq-viewof-doubling_periods"></div>
        <div className="observablehq-viewof-selected_regions"></div>
        <div className="observablehq-swatch"></div>
        <div className="observablehq-chart"></div>
      </div>
    );
  }
}

export default LogChart;
