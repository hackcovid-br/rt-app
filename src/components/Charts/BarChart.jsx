import defineHorizontal from "@bbjacob123/rt-chart"
import defineVertical from "@bbjacob123/rt-chart-inverted"
import { Runtime, Inspector } from "@observablehq/runtime"
import { useRef, useEffect } from "react"

function BarChart({ inverted }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (inverted === undefined) {
      return
    }

    const runtime = new Runtime()

    const define = inverted ? defineVertical : defineHorizontal

    runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })
  }, [inverted])

  return (
    <div className="BarChart">
      <div ref={chartRef}></div>
    </div>
  )
}

export default BarChart
