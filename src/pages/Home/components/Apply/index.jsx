import "./Apply.scss"
import { Link } from "gatsby"

import apply from '../../../../assets/apply.png'

function Apply() {
  return (
    <div className="apply-container">
      <div className="container">
          <div className="content-left">
            <h3 className="content__title">Faça parte desse projeto social!</h3>
              <p className="content__description">Procuramos pessoas <span>apaixonadas</span> por desafios de imapcto!</p>
              <Link to="/sobre" className="content__link">
                Saiba mais sobre o HackCovid
              </Link>
              <a 
                href="https://forms.gle/dWoR2qvQ1umzpcRp9"
                target="_blank" rel="noreferrer"
                className="default-button">Aplique
              </a>
          </div>
          <div className="content-right">
            <img src={apply} alt=""/>
          </div>
      </div>
    </div>
  )
}
export default Apply
