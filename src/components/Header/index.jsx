import "./Header.scss"

import Navbar from "components/Navbar"
import Container from "containers/Container"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <Link to="/">
          <img
            className="logo"
            src="/images/header_logo.png"
            alt="HackCovid logo"
          />
        </Link>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
