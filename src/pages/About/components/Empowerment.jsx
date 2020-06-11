import { useMaxWidth } from 'hooks'

function Image () {
  return(
    <div className="image-side">
      <img src="/images/about/graph.svg" alt="Queremos te empoderar"/>
    </div>
  )
}

export default function Empowerment () {
  const isMobile = useMaxWidth("767px");

  return (
    <section>
      <div className="container divided">
        { !isMobile && <Image /> }
        <div className="text-side">
          <h3>
            Queremos te empoderar<span className="featured-text">.</span>
          </h3>
          <p className="section-text">
            Nossa missão é mostrar a situação do covid-19 no Brasil usando {' '}
            <span className="featured-text">gráficos</span> e {' '}
            <span className="featured-text">estatística</span> {' '}
            com o objetivo de empoderar o cidadão brasileiro a tomar as {' '}
            decisões que minimizam o impacto negativo do vírus em nosso país.
          </p>
        </div>
        { isMobile && <Image /> }
      </div>
    </section>
  )
}