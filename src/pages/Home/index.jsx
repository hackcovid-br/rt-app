import "./Home.scss"

import Layout from "layouts"
import Hero from "./components/Hero"
import Apply from "./components/Apply"
import TalkWithUs from "./components/TalkWithUs"
import Footer from "./components/Footer"

function Home() {
  return (
    <Layout>
      <Hero />

      <Apply />

      <TalkWithUs />

      <Footer />
    </Layout>
  )
}
export default Home
