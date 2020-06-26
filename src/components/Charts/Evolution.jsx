import define from "@bbjacob123/covid-19-casos-e-mortes-no-brasil";
import { Runtime, Inspector } from "@observablehq/runtime";
import { useRef, useEffect } from "react";

export default function Evolution ({ uf }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    const chart = runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })
    chart.redefine('state', uf)
  }, [])

  return <div ref={chartRef} />
}