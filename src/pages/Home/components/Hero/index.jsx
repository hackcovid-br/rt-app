import "./Hero.scss"
import HCLogo from "./HCLogo"

function Hero() {
  return (
    <div className="hero-container">
      <div className="container">
        <h1 className="hero-title">
          Empodere-se com ciência e dados<span>.</span>
        </h1>
        <HCLogo />
      </div>
    </div>
  )
}
export default Hero
