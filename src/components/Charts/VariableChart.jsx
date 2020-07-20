import { Runtime, Inspector } from "@observablehq/runtime";
import { useRef, useEffect } from "react";

export default function Cases ({ config }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    const chart = runtime.module(config.define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })
    chart.redefine(config.variable, config.value)
  }, [])

  return <div ref={chartRef} />
}