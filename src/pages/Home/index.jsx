import Layout from "layouts"

import Apply from "./components/Apply"
import Because from "./components/Because"
import Cases from "./components/Cases"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mobility from "./components/Mobility"
import Streaming from "./components/Streaming"
import TalkWithUs from "./components/TalkWithUs"

function Home() {
  return (
    <Layout>
      <Hero />
      <Because />
      <Streaming />
      <Mobility />
      <Cases />
      <Apply />
      <TalkWithUs />
      <Footer />
    </Layout>
  )
}
export default Home
