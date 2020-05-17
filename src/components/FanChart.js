import define from "@bbjacob123/fan-chart"
import { Runtime, Inspector } from "@observablehq/runtime"
import { useRef, useEffect } from "react"

function FanChart({ uf }) {
  const chartRef = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()

    const main = runtime.module(define, name => {
      if (name === "chart") {
        return new Inspector(chartRef.current)
      }
    })

    main.redefine("state", uf)
  }, [])

  return (
    <div className="FanChart">
      <div ref={chartRef}></div>
    </div>
  )
}

export default FanChart
