import "./Header.scss"

import Container from "containers/Container";


function Header() {
  return (
    <Container tagName="header">
      <img className="logohc" src="/images/logo_HC.png" alt="HackCovid19" />
    </Container>
  )
}

export default Header
