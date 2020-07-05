import "./Hero.scss"
// import HCLogo from "./HCLogo"

import logo from '../../../../assets/logo2x.svg'

function Hero() {
  return (
    <div className="hero-container">
      <div className="container">
        <h1 className="hero-title">
          Empodere-se<span>com ciência e dados</span>
        </h1>
        <img src={logo} alt="Logo hack Covid"/>
        {/* <HCLogo /> */}
      </div>
    </div>
  )
}
export default Hero
