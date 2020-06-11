export default function Hero () {
  return (
    <section className="about-us__hero">
      <div className="container">
        <div className="about-us__presentation">
          <img src="/images/about/flag.svg" alt="Missão HackCovid"/>
          <h1>Missão HackCovid</h1>
        </div>
        <h2>
          Auxiliar na diminuição do impacto do {' '}
          <span className="featured-text">covid-19</span> no Brasil
          <span className="featured-text">.</span>
        </h2>
      </div>
    </section>
  )
}