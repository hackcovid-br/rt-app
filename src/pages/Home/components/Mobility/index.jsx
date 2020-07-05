import "./Mobility.scss";
import mobility from 'assets/mobility.png';
import Highligt from 'components/Highlight';
import { Link } from 'gatsby';

function Mobility() {
  return (
    <div className="mobility-container">
      <div className="container">
          <div className="content-left">
             <img src={mobility} alt=""/>
          </div>
          <div className="content-right">
               <h3 className="content__title">Mobilidade</h3>
              <p className="content__description">
                As pessoas estão respeitando as restrições de isolamento?
                <br/>
                O <Highligt>índice de mobilidade</Highligt> permite a análise 
                da <Highligt>movimentação das pessoas</Highligt>.
              </p>
              <Link to="/mobilidade" className="default-button"> 
                Confira o índice da sua região
              </Link>
          </div>
      </div>
    </div>
  )
}
export default Mobility
