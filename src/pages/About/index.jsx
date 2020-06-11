import "./About.scss"
import Layout from 'layouts'
import { Helmet } from "react-helmet"

import Empowerment from './components/Empowerment'
import Ending from './components/Ending'
import Hero from './components/Hero'
import Indispensble from './components/Indispensable'

export default function AboutUs() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre | HackCovid</title>
      </Helmet>

      <div className="about-us">
        <Hero />
        <Indispensble />
        <Empowerment />
        <Ending />
      </div>
    </Layout>
  )
}
