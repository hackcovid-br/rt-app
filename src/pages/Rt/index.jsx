import "./Home.scss"
import Container from "containers/Container"
import Layout from "layouts"

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
        <Container tagName="main" className="main">
          <Hero apiLinkRef={apiLinkRef} />
          <h3>Comparação entre estados</h3>
          <CountrySummary />
          <StatesSummary />
        </Container>

        <Footer apiLinkRef={apiLinkRef} />
      </div>
    </Layout>
  )
}
