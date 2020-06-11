import Layout from "layouts"

import Apply from "./components/Apply"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import TalkWithUs from "./components/TalkWithUs"

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
