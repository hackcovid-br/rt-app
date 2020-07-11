import "./About.scss"
import Layout from 'layouts'
import { Helmet } from "react-helmet"

import Content from './components/Content'
import Ending from './components/Ending'
import Hero from './components/Hero'

export default function AboutUs() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre | HackCovid</title>
      </Helmet>

      <div className="about-us">
        <Hero />
        <Content />
        <Ending />
      </div>
    </Layout>
  )
}
