import { Runtime, Inspector } from "@observablehq/runtime"
import define from "@santanacostamarco/mobility-in-brazilian-states"
import { useRef, useEffect } from "react"

export default function MobilityChart({ uf }) {
  const chartRef = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()

    const chart = runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })

    chart.redefine('state', uf)
  }, [])

  return (
    <div ref={chartRef}></div>
  )
}