import "./Home.scss"

import CountrySummary from "./components/CountrySummary"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MetaTags from "./components/MetaTags"
import StatesSummary from "./components/StatesSummary"

export default function Rt() {
  return (
    <div className="home-page-container">
      <MetaTags />

      <Hero />

      <CountrySummary />

      <StatesSummary />

      <Footer />
    </div>
  )
}
