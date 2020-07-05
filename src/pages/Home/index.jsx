import Layout from "layouts"

import Hero from "./components/Hero"
import Because from "./components/Because"
import Apply from "./components/Apply"
import Streaming from "./components/Streaming"
import Mobility from "./components/Mobility"
import TalkWithUs from "./components/TalkWithUs"
import Footer from "./components/Footer"
import Cases from "./components/Cases"

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
