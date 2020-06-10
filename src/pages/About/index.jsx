import "./About.scss"
import Layout from 'layouts'
import { Helmet } from "react-helmet"

import Hero from './components/Hero'

export default function AboutUs() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre | HackCovid</title>
      </Helmet>

      <div className="about-us">
        <Hero/>
        <section>
          <div className="container divided">
            <div className="text-side">
              <h3>
                Dados são indispensáveis<span className="featured-text">.</span>
              </h3>
              <p className="section-text">
                Acreditamos que só baseado em dados e ciência conseguiremos {' '}
                tomar as decisões que maximizam tanto a {' '}
                <span className="featured-text">prosperidade econômica</span> {' '}
                quanto a <span className="featured-text">saude e segurança</span> {' '}
                da nossa sociedade nesses tempos de pandemia.
              </p>
            </div>
            <div className="image-side">
              <img src="/images/about/brain.svg" alt="Dados são indispensáveis"/>
            </div>
          </div>
        </section>

        <section>
          <div className="container divided">
            <div className="image-side">
              <img src="/images/about/graph.svg" alt="Queremos te empoderar"/>
            </div>
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
          </div>
        </section>

        <section className="ending">
          <div className="container">
            <h3>
              Agora não é hora de achismo, mais do que nunca, agora é hora de {' '}
              todos sermos <span className="featured-text">direcionados por dados</span>.
            </h3>
            <div className="logo-hackcovid-container">
              <img className="logo-hackcovid" 
                  src="/images/about/hackcovid.svg" 
                  alt="HackCovid" />
            </div>
          </div>
        </section>


      </div>
    </Layout>
  )
}
