import "./CountrySummary.scss"
import BarChart from "../BarChart"

function CountrySummary() {
  return (
    <div className="container country-summary-container">
      <h3 className="title">Comparação entre estados</h3>
      <p className="data-description">Último Dia</p>
      <div className="chart-wrapper">
        <BarChart />
      </div>
    </div>
  )
}
export default CountrySummary
