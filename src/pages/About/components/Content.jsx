import imgData from 'assets/vector/data.svg';
import imgEmpowerment from 'assets/vector/empowerment.svg';
import Highlight from 'components/Highlight';

import { useMaxWidth } from 'hooks'

export default function Empowerment () {
  const isMobile = useMaxWidth("767px");

  return (
    <section className="about-us__content">
      <div className={`container ${ !isMobile ? 'columns' : '' }`}>
        <div className="content__column">
          <img src={imgData} alt="Dados são indispensáveis."/>
          <h3>Dados são indispensáveis.</h3>
          <p>
            Acreditamos que só baseado em dados e ciência conseguiremos tomar as 
            decisões que maximizam tanto a <Highlight>prosperidade econômica</Highlight>{' '}
            quanto a <Highlight>saude e segurança</Highlight> da nossa sociedade 
            nesses tempos de pandemia. 
          </p>
        </div>
        <div className="content__column">
          <img src={imgEmpowerment} alt="Queremos te empoderar!"/>
          <h3>Queremos te empoderar!</h3>
          <p>
            Nossa missão é mostrar a situação do covid-19 no Brasil usando {' '}
            <Highlight>gráficos</Highlight> e <Highlight>estatística</Highlight> {' '} 
            com o objetivo de empoderar o cidadão brasileiro a tomar as decisões 
            que minimizam o impacto negativo do vírus em nosso país.
          </p>
        </div>
      </div>
    </section>
  )
}