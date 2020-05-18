import "./StateSummary.scss"

import statesOfBrazil from "helpers/statesOfBrazil"

import FanChart from "../FanChart"

function StatesSummary() {
  return (
    <ul className="container states-summary-container">
      {statesOfBrazil.map(uniqueState => (
        <li key={uniqueState.uf} className="state-wrapper">
          <p>{uniqueState.name}</p>
          <FanChart className="state" uf={uniqueState.uf} />
        </li>
      ))}
    </ul>
  )
}
export default StatesSummary
