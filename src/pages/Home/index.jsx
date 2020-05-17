import "./Home.scss"
import statesOfBrazil from "helpers/statesOfBrazil.js"

import BarChart from "components/BarChart.js"
import FanChart from "components/FanChart.js"
import Footer from "components/Footer"
import Header from "components/Header"
import MetaTags from './components/MetaTags'

function Home() {
  return (
    <div className="bodyPage">
      <MetaTags />
      <Header />
      <h1 className="rtcovid">
        R<sub>t</sub> Covid-19
      </h1>
      <h2 className="whatsRt">O que é o Rt?</h2>
      <p className="answerRt">
        Rt é o numero de reprodução do vírus no tempo t. Esse número descreve a
        média de pessoas que são contaminadas por pessoa infectada. A forma mais
        conhecida dessa métrica é o número básico de reprodução, R0 (r-zero)
        quando t=0. O problema do R0 é que ele não adapta a mudanças de
        comportamento ou restrições governamentais e sociais, ele é fixo. Na
        forma que a pandemia evolui e as restrições aumentam ou diminuem, o Rt
        também muda. Quando Rt {">"} 1, a pandemia espalha para uma porção
        grande da população. Se o Rt menor que 1, a pandemia diminui rapidamente
        antes de infectar muita gente. Inspirados pelo{" "}
        <a
          className="link"
          href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"
        >
          notebook
        </a>{" "}
        do Kevin Systrom, reproduzimos o modelo utilizando os dados do Brasil.
      </p>
      <h3 className="States">Comparação entre estados</h3>
      <p className="latestWeek">Último Dia</p>
      <div className="barchartstyle">
        <BarChart />
      </div>
      <ul className="allState">
        {statesOfBrazil.map((uniqueState, index) => (
          <li key={index} className="uniqueState">
            <p>{uniqueState.name}</p>
            <FanChart className="state" uf={uniqueState.uf} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default Home
