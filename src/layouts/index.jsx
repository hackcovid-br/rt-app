import Header from "components/Header"
import { Helmet } from "react-helmet"

function Layout({ children }) {
  return (
    <div className="main-layout">
      <Helmet>
        <title>HackCovid</title>
        <meta
          name="description"
          content=" HackCovid é um projeto social que tem como objetivo auxiliar na diminuição do impacto do covid-19."
        />
      </Helmet>
      <Header />
      {children}
    </div>
  )
}

export default Layout
