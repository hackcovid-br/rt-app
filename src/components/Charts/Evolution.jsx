import { Runtime, Inspector } from "@observablehq/runtime";
import define from "@santanacostamarco/covid-19-casos-por-estado";
import { useRef, useEffect } from "react";

export default function Evolution ({ type }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    const chart = runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })

    chart.redefine('y_type', type);
  }, [type])

  return <div ref={chartRef} />
}