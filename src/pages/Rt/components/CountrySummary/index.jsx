import "./CountrySummary.scss"

import { useMaxWidth } from 'hooks';

import BarChart from "../BarChart"

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
