import "./BeParty.scss"

function BeParty() {
  return (
    <div className="be-container">
      <div className="container">
          <div className="content-left"></div>
          <div className="content-right">
              <h3 className="content__title">Faça parte desse projeto social!</h3>
              <p className="content__sub-title">Procuramos pessoas apaixonadas por desafios de imapcto!</p>
              <Link to="/" className="content__link">Saiba mais sobre o HackCovid</Link>
              <a 
                href="https://forms.gle/dWoR2qvQ1umzpcRp9"
                target="_blank"
                className="content__link__button">Aplique
              </a>
          </div>
      </div>
    </div>
  )
}
export default BeParty

