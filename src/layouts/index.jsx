import "./Layout.scss"
import Footer from "components/Footer"
import Header from "components/Header"
import { Helmet } from "react-helmet"

import { useMaxWidth } from 'hooks';

function Layout({ children }) {
  const isMobile = useMaxWidth();
  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      <Helmet>
        <title>HackCovid</title>
        <meta
          name="description"
          content=" HackCovid é um projeto social que tem como objetivo auxiliar na diminuição do impacto do covid-19."
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
