import { Runtime, Inspector } from "@observablehq/runtime";
import define from "@santanacostamarco/brazil-coronavirus-daily-cases-map-covid-19";
import { useRef, useEffect } from "react";

export default function DailyCasesMap ({ type }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    const chart = runtime.module(define, name => {
      if (name === "map") {
        return new Inspector(chartRef.current)
      }
    });

    chart.redefine('confirmed_or_deaths', type);
  }, [type]);

  return <div ref={chartRef} />
}