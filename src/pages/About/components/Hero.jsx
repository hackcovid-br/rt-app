import bg from 'assets/images/virusbg.png';
import flag from 'assets/vector/hackcovid-flag.svg';
import Highlight from 'components/Highlight';

import { useMaxWidth } from 'hooks'

export default function Hero () {

  const isMobile = useMaxWidth('767px');

  return (
    <section className="about-us__hero">
      <div className="bg-wrapper">
        <img src={bg} alt="covid-19"/>
      </div>
      <div className="container">
        <div className="presentation">
          <div className="icon-and-title">
            <img src={flag} alt="Missão HackCovid"/>
            <h1><Highlight>Missão HackCovid</Highlight></h1>
          </div>
          <h2 className={isMobile ? 'small' : ''}>
            Auxiliar na diminuição do impacto do <Highlight>covid-19</Highlight> 
            {''} no Brasil<Highlight>.</Highlight>
          </h2>
        </div>
        
      </div>
    </section>
  )
}