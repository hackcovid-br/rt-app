import FanChart from "components/FanChart"
import StatesGrid from 'components/StatesGrid'
import Layout from "layouts"
import { useRef } from "react"

import CountrySummary from "./components/CountrySummary"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MetaTags from "./components/MetaTags"


export default function Rt() {
  const apiLinkRef = useRef(null)

  return (
    <Layout>
      <MetaTags />

        <div className="container main">
          <Hero apiLinkRef={apiLinkRef} />
          <h3>Comparação entre estados</h3>
          <CountrySummary />

          <h4>
            Histórico do R<sub>t</sub> por estado
          </h4>

          <StatesGrid render={uf => (
            <FanChart uf={uf} />) } 
          />
        </div>

        <Footer apiLinkRef={apiLinkRef} />

    </Layout>
  )
}
