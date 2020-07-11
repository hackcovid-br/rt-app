import "./Because.scss"

import iconeBalance from 'assets/iconeBalance.svg'
import iconeBlock from 'assets/iconeBlock.svg'
import IconeShare from 'assets/IconeShare.svg'
import vectorBashed from 'assets/vectorBashed.svg'
import Highlight from 'components/Highlight';

import { useMaxWidth } from 'hooks';

function BoxItem({ side, icon, children }) {
  return (
    <div className="box__item">
      {side === "left" &&
        <p className="content__title">
          {children}
        </p>
      }

      <div className="content__icon">
        <img src={icon} />
      </div>

      {side === "right" &&
        <p className="content__title">
          {children}
        </p>
      }
    </div>
  )
}

function BoxItemBalance({ side }) {
  return (
    <BoxItem side={side} icon={iconeBalance} >
      Nos dá a direção se devemos <Highlight>aumentar</Highlight> ou {' '}
      <Highlight>diminuir</Highlight> as restrições equilibrando a prosperidade
      econômica e a saúde da população.
    </BoxItem>
  )
}

function Because() {

  const isMobile = useMaxWidth();

  return (
    <div className="because-container">
      <div className="container">
        <div className="text-content">
          <h3 className="because-title">
            Por que é importante <Highlight>conhecer</Highlight> os dados da
            pandemia do <Highlight>covid-19</Highlight>?
          </h3>
        </div>
        <div className="box-content">

          <div className="box-col left">
            <BoxItem side="left" icon={IconeShare} >
              Podemos <Highlight>acompanhar</Highlight> como o <Highlight>vírus</Highlight> está se
              espalhando em cada reigião.
            </BoxItem>
            {isMobile &&
              <BoxItemBalance side="left" />
            }
            <BoxItem side="left" icon={iconeBlock} >
              Nos ajuda a <Highlight>entender</Highlight> a efetividade das
              medidas de <Highlight>quarentena</Highlight>.
            </BoxItem>
          </div>

          {!isMobile && (
            <div className="box-col center">
              <div className="box__item">
                <img src={vectorBashed} alt="" />
              </div>
            </div>
          )}

          {!isMobile &&
            <div className="box-col right">
              <BoxItemBalance side="right" />
            </div>
          }

        </div>
      </div>
    </div>
  )
}
export default Because
