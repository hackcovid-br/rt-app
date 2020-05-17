import define from "@bbjacob123/rt-chart"
import { Runtime, Inspector } from "@observablehq/runtime"
import { useRef, useEffect } from "react"

function BarChart() {
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
    <div className="BarChart">
      <div ref={chartRef}></div>
    </div>
  )
}

export default BarChart
