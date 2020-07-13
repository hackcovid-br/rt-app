import "./Hero.scss"

import logo from 'assets/logo2x.svg'
import bg from 'assets/graficoGirl.png'

function Hero() {
  return (
    <div className="hero-container">
      <img className="background" src={bg} alt="Logo hack Covid"/>
      <div className="container">
        <div className="container-box">
          <h1 className="hero-title">
            <span>
              Empodere-se 
            </span>
            <span>
              com ciência e dados
            </span>
          </h1>
          <img className="logo" src={logo} alt="Logo hack Covid"/>
        </div>
      </div>
    </div>
  )
}
export default Hero

