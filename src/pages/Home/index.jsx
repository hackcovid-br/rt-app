import "./Home.scss"

import Layout from "layouts"
import Hero from "./components/Hero"
import Apply from "./components/Apply"
import TalkWithUs from "./components/TalkWithUs"
import Footer from "./components/Footer"
import BrHeatChart from "pages/Rt/components/BrHeatChart/BrHeatChart"

function Home() {
  return (
    <Layout>
      <BrHeatChart></BrHeatChart>
    </Layout>
  )
}
export default Home
