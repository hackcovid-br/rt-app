import "./Header.scss"

import Navbar from "components/Navbar"
import { Link } from "gatsby"
import Logo from "components/Logo"

import logo from '../../assets/logoMenu.svg';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo__link">
          <img
            className="logo"
            src={logo}
            alt="HackCovid logo"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
