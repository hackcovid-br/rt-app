import { useEffect, useState } from "react";

import "./CountrySummary.scss";
import BarChart from "../BarChart";

function CountrySummary() {
  const media = window.matchMedia('(max-width: 767px)');
  const [state, setState] = useState({
    isMobile: media.matches,
  });

  function handleResize() {
    setState({
      ...state,
      isMobile: media.matches,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="container country-summary-container">
      <h3 className="title">Comparação entre estados</h3>
      <p className="data-description">Último Dia</p>
      <div className="chart-wrapper">
        <BarChart inverted={state.isMobile} />
      </div>
    </div>
  )
}
export default CountrySummary
