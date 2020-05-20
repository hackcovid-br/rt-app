import "./Home.scss"

import CountrySummary from "./components/CountrySummary"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MetaTags from "./components/MetaTags"
import StatesSummary from "./components/StatesSummary"

function Home() {
  return (
    <div className="home-page-container">
      <MetaTags />
      <Header />

      <Hero />

      <CountrySummary />

      <StatesSummary />

      <Footer />
    </div>
  )
}

export default Home
