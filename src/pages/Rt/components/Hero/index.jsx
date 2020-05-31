import "./Hero.scss"
import LastDate from "components/LastDate"

export default function Hero({ apiLinkRef }) {
  function handleClickInfo(e) {
    const ref = apiLinkRef.current
    e.preventDefault()
    ref.scrollIntoView({ behavior: "smooth" })
    ref.style.transformOrigin = `center center`
    ref.style.transition = `box-shadow .2s ease-in-out .4s`
    ref.style.boxShadow = `0px 0px 1px 2px #9900015c`

    const timeout = setTimeout(() => {
      ref.style.boxShadow = `none`
      clearTimeout(timeout)
    }, 700)
  }

  return (
    <section className="hero">
      <h1 className="rtcovid">
        R<sub>t</sub> Covid-19
      </h1>
      <h2 className="whatsRt">
        O que é o R<sub>t</sub>?
      </h2>
      <p className="answerRt">
        R<sub>t</sub> é o numero de reprodução do vírus no tempo <em>t</em>.
        Esse número descreve a média de pessoas que são contaminadas por pessoa
        infectada. A forma mais conhecida dessa métrica é o número básico de
        reprodução, R<sub>0</sub> (r-zero) quando t = 0. O problema do R
        <sub>0</sub> é que ele não adapta a mudanças de comportamento ou
        restrições governamentais e sociais, ele é fixo. Na forma que a pandemia
        evolui e as restrições aumentam ou diminuem, o R<sub>t</sub> também
        muda. Quando R<sub>t</sub> é maior que 1, a pandemia espalha para uma
        porção grande da população. Se o R<sub>t</sub> for menor que 1, a
        pandemia diminui rapidamente antes de infectar muita gente.
      </p>
      <p className="data-description">
        Dados até: <LastDate />
        <button
          className="info"
          title="Mais informações"
          onClick={handleClickInfo}
        >
          i
        </button>
      </p>
    </section>
  )
}
