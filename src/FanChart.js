import React, {Component} from "react";
import {Runtime, Library, Inspector} from "@observablehq/runtime";
import define from "@jefersonalves/fan-chart";

class FanChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const runtime = new Runtime();

        const main = runtime.module(define, name => {
            if (name === "chart") {
                return new Inspector(this.chartRef.current);
            }
        });

        main.redefine("state", this.props.uf);
    }

    render() {
        return (
            <div className="FanChart">
                <div ref={this.chartRef}></div>
            </div>
        );
    }
}

export default FanChart;