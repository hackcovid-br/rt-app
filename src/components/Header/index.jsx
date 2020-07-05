import "./Header.scss"

import Navbar from "components/Navbar"
import { Link } from "gatsby"
import Logo from "components/Logo"

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo__link">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
