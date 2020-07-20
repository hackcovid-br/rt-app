import "./Hero.scss"
import Highlight from "components/Highlight"
import InfoButton from 'components/InfoButton'
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
        O índice de transmissão do vírus, ou R<sub>t</sub> , descreve 
        o <Highlight> número médio de pessoas que são infectadas por pessoa 
        contaminada </Highlight> com covid-19. A forma mais conhecida dessa 
        métrica é o número básico de reprodução, R<sub>0</sub> (r-zero) 
        quando <em>t</em> = 0, calculado no começo da pandemia. O problema do 
        R<sub>0</sub> é que ele não adapta a mudanças de comportamento ou 
        restrições governamentais e sociais, ele é fixo. Na forma que a 
        pandemia evolui e as restrições aumentam ou diminuem, 
        o R<sub>t</sub> também muda. Quando o <Highlight>R<sub>t</sub> é maior 
        que 1</Highlight>, a <Highlight>pandemia espalha</Highlight> para uma 
        porção grande da população. Se o <Highlight>R<sub>t</sub> é menor que 1</Highlight>, 
        a situação está mais controlada e a pandemia diminui.
      </p>
      <p className="data-description">
        <LastDate />
        <InfoButton onClick={handleClickInfo} />
      </p>
    </section>
  )
}
