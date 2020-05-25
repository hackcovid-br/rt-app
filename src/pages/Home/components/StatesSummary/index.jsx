import "./StateSummary.scss"

import statesOfBrazil from "helpers/statesOfBrazil"

import FanChart from "../FanChart"

function StatesSummary() {
  return (
    <div>
      <h4>
        Histórico do R<sub>t</sub> por estado
      </h4>
      <ul className="states-summary-container">
        {statesOfBrazil.map(uniqueState => (
          <li key={uniqueState.uf} className="state-wrapper">
            <p className="sm-indent">{uniqueState.name}</p>
            <FanChart className="state" uf={uniqueState.uf} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default StatesSummary
