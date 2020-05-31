import "./Header.scss"

import Navbar from "components/Navbar"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/">
          <img
            className="logo"
            src="/images/header_logo.png"
            alt="HackCovid logo"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
