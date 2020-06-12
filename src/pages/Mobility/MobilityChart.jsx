import define from "@bbjacob123/mobility-in-brazilian-states"
import { Runtime, Inspector } from "@observablehq/runtime"
import { useRef, useEffect } from "react"

export default function MobilityChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()

    runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })
  }, [])

  return (
    <div ref={chartRef}></div>
  )
}