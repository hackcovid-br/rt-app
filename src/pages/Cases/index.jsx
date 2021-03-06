import './Cases.scss';

import CasesSummary from "components/Cases"
import CasesChart from 'components/Charts/Cases';
import DeathsChart from 'components/Charts/Deths';
import Evolution from 'components/Charts/Evolution';
import LastDate from 'components/LastDate';
// import CasesBrazilMap from 'components/Maps/CasesBrazil';
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

          <Evolution type={chartType}/>

          {/* <CasesBrazilMap type={chartType} /> */}

          <StatesGrid render={ uf => (
            <>
              { chartType === 'confirmed' && <CasesChart uf={ uf } /> }
              { chartType === 'deaths' && <DeathsChart uf = { uf } /> }
            </>
          )} />

        </section>

      </div>
      <section className="footer">
        <div className="container">
          <h4> Referências e Recursos </h4>
          <ul>
            <li> Brasil.io (<a href="https://brasil.io/home/" target="_blank" 
                rel="noopener noreferrer"
              > https://brasil.io/home/ </a>)
            </li>
          </ul>
        </div>
      </section>

    </Layout>

  )
}