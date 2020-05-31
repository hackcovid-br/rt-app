import "./Home.scss"

import Layout from "layouts"
import Hero from "./components/Hero"

function Home() {
  return (
    <Layout>
      <div className="container home-container">
        <Hero />
      </div>
    </Layout>
  )
}
export default Home
