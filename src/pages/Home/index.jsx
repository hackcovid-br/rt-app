import Layout from "layouts"
import { Helmet } from 'react-helmet';

import Apply from "./components/Apply"
import CasesContainer from './components/CasesContainer';
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import TalkWithUs from "./components/TalkWithUs"

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>HackCovid | Empodere-se com ciência e dados.</title>
      </Helmet>
      <Hero />
      <CasesContainer />
      <Apply />

      <TalkWithUs />

      <Footer />
    </Layout>
  )
}
export default Home
