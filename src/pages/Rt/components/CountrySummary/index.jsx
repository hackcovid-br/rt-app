import "./CountrySummary.scss"
import { useEffect, useState } from "react"

import BarChart from "../BarChart"

function CountrySummary() {
  const [state, setState] = useState({})

  function handleResize() {
    setState({
      ...state,
      isMobile: window.matchMedia("(max-width: 767px)").matches,
    })
  }

  useEffect(() => {
    setState({
      ...state,
      isMobile: window.matchMedia("(max-width: 767px)").matches,
    })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="country-summary-container">
      <h4>
        R<sub>t</sub> mais recente por estado
      </h4>
      <div className="chart-wrapper">
        <BarChart inverted={state.isMobile} />
      </div>
    </div>
  )
}
export default CountrySummary
