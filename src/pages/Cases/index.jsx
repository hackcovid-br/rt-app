import './Cases.scss';

//import Evolution from 'components/Charts/Evolution';
import CasesChart from 'components/Charts/Cases';
import DeathsChart from 'components/Charts/Deths';
import LastDate from 'components/LastDate';
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
            {/* cases components goes here */}
          </div>
          <LastDate/>
        </section>


        <section className="state-comparison">
          <h2>
            Comparação entre estados
          </h2>

          {/*<Evolution/>*/}
         
          <div className="chart-switcher">
            <button className={chartType === 'deaths' ? 'current' : ''} 
              onClick={ () => setChartType('deaths') }
            >
              Óbitos
            </button>

            <button className={chartType === 'cases' ? 'current' : ''} 
              onClick={ () => setChartType('cases') }
            >
              Casos
            </button>
          </div>

          <StatesGrid render={ uf => (
            <>
              { chartType === 'cases' && <CasesChart uf={ uf } /> }
              { chartType === 'deaths' && <DeathsChart uf = { uf } /> }
            </>
          )} />

        </section>

      </div>

    </Layout>

  )
}