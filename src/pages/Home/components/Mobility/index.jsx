import "./Mobility.scss"
import mobility from '../../../../assets/mobility.png'

import { Link } from "gatsby"

function Mobility() {
  return (
    <div className="mobility-container">
      <div className="container">
          <div className="content-left">
             <img src={mobility} alt=""/>
          </div>
          <div className="content-right">
               <h3 className="content__title">Mobilidade</h3>
              <p className="content__sub-title">As pessoas estão respeitando as restrições de isolamento?</p>
              <p className="content__description">O índice de mobilidade permite a análise da movimentação das pessoas.</p>
              <Link to="/" className="content__link">Índice de transmissão do Covid-19 (Rt).</Link>
          </div>
      </div>
    </div>
  )
}
export default Mobility
