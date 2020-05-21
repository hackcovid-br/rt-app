import "./CountrySummary.scss";
import { useEffect, useState } from "react";

import LastDate from './LastDate';

import BarChart from "../BarChart"


function CountrySummary() {
  const [state, setState] = useState({});

  function handleResize() {
    setState({
      ...state,
      isMobile: window.matchMedia('(max-width: 767px)').matches,
    });
  }

  useEffect(() => {
    setState({
      ...state, 
      isMobile: window.matchMedia('(max-width: 767px)').matches,
    })
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="container country-summary-container">
      <h3 className="title">Comparação entre estados</h3>
      <p className="data-description">
        Dados até:{' '}
        <LastDate/>
      </p>
      <div className="chart-wrapper">
        <BarChart inverted={state.isMobile} />
      </div>
    </div>
  )
}
export default CountrySummary
