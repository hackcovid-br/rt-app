import Layout from "layouts"
import { Helmet } from 'react-helmet';

import Apply from "./components/Apply"
import Because from "./components/Because"
import Cases from "./components/Cases"
import CasesContainer from './components/CasesContainer';
import Hero from "./components/Hero"
import Mobility from "./components/Mobility"
import Streaming from "./components/Streaming"
import TalkWithUs from "./components/TalkWithUs"

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>HackCovid | Empodere-se com ciência e dados.</title>
      </Helmet>
      <Hero />
      <CasesContainer />
      <Because />
      <Cases />
      <Streaming />
      <Mobility />
      <Apply />
      <TalkWithUs />
    </Layout>
  )
}
export default Home
