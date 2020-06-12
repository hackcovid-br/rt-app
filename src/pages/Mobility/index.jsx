import Layout from "layouts"
import { Helmet } from "react-helmet"

import MobilityChart from "./MobilityChart"

export default function Mobility() {
  return (
    <Layout>
      <Helmet>
        <title> Mobilidade por Estado | HackCovid </title>
      </Helmet>
      <div className="container main">
        <section className="hero">
          <h1 className="main-title"> Mobilidade por estado<span className="highlight">.</span> </h1>
          <div className="page-subject-text"> 
            <p>
              Como o vírus é transmitido por proximidade, é importante acompanhar 
              como a <span className="highlight">mobilidade está mudando em 
              comparação com o padrão</span> (período antes da pandemia) em sua 
              região.
            </p>
            <p>
              A mobilidade te dá uma <span className="highlight">noção se as pessoas em sua região 
              estão ou não respeitando as restrições sociais</span> estabelecidas em seu estado.
            </p>
          </div>
        </section>
        <section className="chart" style={{maxWidth: "550px", margin: "0 auto"}}>
          <MobilityChart />
        </section>
      </div>
    </Layout>
  )
}
