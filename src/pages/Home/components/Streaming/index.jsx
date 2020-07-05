import "./Streaming.scss"

import { Link } from "gatsby"

function Streaming() {
  return (
    <div className="streaming-container">
        <div className="container">
            <div className="content-left">
                <h3 className="content__title">Índice de Transmissão do covid-19 (Rt)</h3>
                <p className="content__description">É o número médio de pessoas que são infectadas por pessoa contaminada com <span>covid-19</span> .</p>
                <Link to="/" className="content__link">Confira o índice de sua região</Link>
            </div>
            <div className="content-right"></div>
        </div>
    </div>
  )
}
export default Streaming
