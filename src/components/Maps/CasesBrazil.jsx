import define from "@bbjacob123/cases-map-covid";
import {
  Runtime, 
  Inspector
 } from "@observablehq/runtime";
 import { useRef, useEffect } from "react";

 export default function CasesBrazilMap () {
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, () => {
      return new Inspector(chartRef.current)
    })
  }, [])

  return <div ref={chartRef} />
}