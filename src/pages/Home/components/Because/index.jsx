import "./Because.scss"

import iconeBalance from '../../../../assets/iconeBalance.svg'
import iconeBlock from '../../../../assets/iconeBlock.svg'
import IconeShare from '../../../../assets/IconeShare.svg'
import vectorBashed from '../../../../assets/vectorBashed.svg'


function Because() {
  return (
    <div className="because-container">
      <div className="container">
        <div className="text-content">
          <h3 className="because-title">
            Por que é importante <span>conhecer</span> os dados da pandemia do <span>covid-19</span>?
          </h3>
        </div>
        <div className="box-content">
            <div className="box__icon">
                <img src={vectorBashed} alt=""/>
            </div>
            <div className="box__item">
                <p className="content__title">Podemos <span>acompanhar</span> como o <span>vírus</span> está se espalhando em cada reigião.</p>
                <span className="content__icon"><img src={IconeShare} /></span>
            </div>
            <div className="box__item">
                <span className="content__icon"><img src={iconeBalance} /></span>
                <p className="content__title">Nos dá a direção se devemos <span>aumentar</span> ou <span>diminuir</span> as restrições equilibrando a prosperidade econômica e a saúde da população.</p>
            </div>
            <div className="box__item">
                <p className="content__title">Nos ajuda a <span>entender</span> a efetividade das medidas de <span>quarentena</span>.</p>
                <span className="content__icon"><img src={iconeBlock} /></span>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Because
