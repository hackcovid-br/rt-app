import React, {Component} from "react";
import {Runtime, Library, Inspector} from "@observablehq/runtime";
import define from "@bbjacob123/rt-chart";

class BarChart extends Component {
    chartRef = React.createRef();

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
            return new Inspector(this.chartRef.current);
          }
        });
      }
    
      render() {
        return (
          <div className="BarChart">
            <div ref={this.chartRef}></div>
          </div>
        );
      }
}

export default BarChart;
