import MobilityChart from "components/Charts/Mobility"
import Highligh from "components/Highlight"
import LastDate from "components/LastDate"
import StatesGrid from 'components/StatesGrid'
import Layout from "layouts"
import { Helmet } from "react-helmet"


export default function Mobility() {
  return (
    <Layout>
      <Helmet>
        <title> Mobilidade Covid-19 | HackCovid </title>
      </Helmet>
      
      <section className="hero">
        <div className="container">
          <h1> Mobilidade Covid-19 </h1>
          <p className="text-limit-width bold">
            Como o vírus é transmitido por proximidade, é importante acompanhar 
            como a <Highligh>mobilidade está mudando em 
            comparação com o padrão</Highligh> (período antes da pandemia) em sua 
            região.
          </p>
          <p className="text-limit-width bold">
            A mobilidade te dá uma <Highligh>noção se as pessoas em sua região 
            estão ou não respeitando as restrições sociais</Highligh> estabelecidas em seu estado.
          </p>
          <LastDate />
        </div>
      </section>

      <section className="content">
        <div className="container">
          <h2> Comparação entre estados </h2>
          <StatesGrid 
            render={uf => <MobilityChart uf={uf} /> }
          />
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <h4> Referências e Recursos </h4>
          <ul>
            <li> Dados do Mobility Report da Google (
              <a href="https://www.google.com/covid19/mobility/">
                https://www.google.com/covid19/mobility/
              </a>) 
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
