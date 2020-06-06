import { Runtime, Inspector } from "@observablehq/runtime";
import React, { Component } from "react";

import notebook from "./index.js";

class BrHeatChart extends Component {
  componentDidMount() {
    (new Runtime).module(notebook, name => {
      if (name === "map") return Inspector.into("#observablehq-c65430d5 .observablehq-map")();
    });
  }

  render() {
    return (
      <div id="observablehq-c65430d5">
        <div className="observablehq-map" />
      </div>
    );
  }
}

export default BrHeatChart;
