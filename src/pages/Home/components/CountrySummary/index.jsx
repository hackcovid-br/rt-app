import "./CountrySummary.scss"
import moment from "moment";

import BarChart from "../BarChart"

function CountrySummary() {
  return (
    <div className="container country-summary-container">
      <h3 className="title">Comparação entre estados</h3>
      <p className="data-description">
        Dados até:{' '}
        <span className="featured-text">
          {moment().format("D/M/YYYY")}
        </span>
      </p>
      <div className="chart-wrapper">
        <BarChart />
      </div>
    </div>
  )
}
export default CountrySummary
