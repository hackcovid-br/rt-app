import "./Footer.scss";
import logo from 'assets/logo-footer.svg';
import Highlight from 'components/Highlight';

import { useMaxWidth } from 'hooks'

function Footer() {
 
  const isMobile = useMaxWidth();

  return (
    <footer className={`main-footer ${ isMobile ? 'small' : '' }`}>
      <div className="container">
        <div className="contact">
          <h4>Fale conosco:</h4>
          <p>contato<Highlight>@</Highlight>hackcovid.com.br</p>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="HackCovid"/>
          <h4>HackCovid</h4>
        </div>
      </div>
    </footer>
  )
}
export default Footer
