import React, {Component} from "react";
import {Runtime, Library, Inspector} from "@observablehq/runtime";
import define from "./chart.js";

class App extends Component {
  componentDidMount() {
    const runtime = new Runtime();
    //runtime.module(define, Inspector.into(this.animationRef.current));
    // runtime.module(define, name => {
    //   if (name === "chart") {
    //     return new Inspector.into(this.animationRef.current);
    //   }
    // })

    runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(document.querySelector("#chart"));
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div id="chart"></div>
      </div>
    );
  }
}

export default App;