import Layout from "layouts"
import { useRef } from "react"

import CountrySummary from "./components/CountrySummary"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MetaTags from "./components/MetaTags"
import StatesSummary from "./components/StatesSummary"

export default function Rt() {
  const apiLinkRef = useRef(null)

  return (
    <Layout>
      <div className="home-page-container">
        <MetaTags />
        <div className="container main">
          <Hero apiLinkRef={apiLinkRef} />
          <h3>Comparação entre estados</h3>
          <CountrySummary />
          <StatesSummary />
        </div>

        <Footer apiLinkRef={apiLinkRef} />
      </div>
    </Layout>
  )
}
