import './Cases.scss';

import CasesSummary from "components/Cases"
import CasesChart from 'components/Charts/Cases';
import DeathsChart from 'components/Charts/Deths';
// import Evolution from 'components/Charts/Evolution';
import LastDate from 'components/LastDate';
import CasesBrazilMap from 'components/Maps/CasesBrazil';
import StatesGrid from 'components/StatesGrid';
import Layout from 'layouts';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Cases() {
  const [chartType, setChartType] = useState('deaths');

  return (
    <Layout>
      <Helmet> 
        <title>
          Casos Covid-19 | Hackcovid 
        </title>
      </Helmet>

      <div className="container">

        <section className="overview">
          <h1>
            Casos Covid-19
          </h1>
          <div>
            <CasesSummary />
          </div>
          <LastDate/>
        </section>


        <section className="state-comparison">
          <h2>
            Comparação entre estados
          </h2>

          {/* <Evolution type={chartType}/> */}
          <CasesBrazilMap />
         
          <div className="chart-switcher">
            <button className={chartType === 'deaths' ? 'current' : ''} 
              onClick={ () => setChartType('deaths') }
            >
              Óbitos
            </button>

            <button className={chartType === 'confirmed' ? 'current' : ''} 
              onClick={ () => setChartType('confirmed') }
            >
              Casos
            </button>
          </div>

          <StatesGrid render={ uf => (
            <>
              { chartType === 'confirmed' && <CasesChart uf={ uf } /> }
              { chartType === 'deaths' && <DeathsChart uf = { uf } /> }
            </>
          )} />

        </section>

      </div>

    </Layout>

  )
}