import "./Home.scss"

import Container from "containers/Container";

import CountrySummary from "./components/CountrySummary"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MetaTags from "./components/MetaTags"
import StatesSummary from "./components/StatesSummary"

export default function Home() {
  return (
    <div className="home-page-container">
      <MetaTags />
      <Container tagName="main" className="main">
        <Hero />
        <h3>Comparação entre estados</h3>
        <CountrySummary />
        <StatesSummary />
      </Container>

      <Footer />
    </div>
  )
}
