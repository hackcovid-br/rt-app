import "./CountrySummary.scss"

import BarChart from "components/BarChart"

import { useMaxWidth } from 'hooks';


function CountrySummary() {
  const isMobile = useMaxWidth();

  return (
    <div className="country-summary-container">
      <h4>
        R<sub>t</sub> mais recente por estado
      </h4>
      <div className="chart-wrapper">
        <BarChart inverted={isMobile} />
      </div>
    </div>
  )
}
export default CountrySummary
