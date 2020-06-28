import Layout from "layouts"

import Apply from "./components/Apply"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import TalkWithUs from "./components/TalkWithUs"
import Cases from "./components/Cases"

function Home() {
  return (
    <Layout>
      <Hero />
      <Cases />
      <Apply />

      <TalkWithUs />

      <Footer />
    </Layout>
  )
}
export default Home
