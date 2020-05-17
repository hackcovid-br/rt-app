function Footer() {
  return (
    <div className="Footer">
      <p className="footertitle">Recursos</p>
      <ul>
        <li>
          Jupyter{" "}
          <a
            className="link"
            href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"
          >
            notebook
          </a>{" "}
          do Kevin Systrom com sua metodologia para calcular{" "}
          <em>
            R<sub>t</sub>
          </em>
          .
        </li>
        <li>
          <a className="link" href="https://github.com/wcota/covid19br">
            API
          </a>{" "}
          dos dados usados no modelo.
        </li>
      </ul>
      <p className="footertitle">Limitações da metodologia</p>
      <ul>
        <li>
          Nossa base de dados é sujeita a dois principais efeitos: o primeiro, é
          o efeito da subnotificação e o segundo, é o efeito do baixo número de
          testes no Brasil. Mesmo assim, o que mais importa é a variação entre
          os números de casos, mas que também pode ser afetada se tiver uma
          grande variação no número de testes disponíveis.
        </li>
        <li>
          Existe um período de incubação onde pessoas conseguem infectar outras
          pessoas mas não mostram nenhum sintoma. Esse modelo assume que a
          infecciosidade começa quando uma pessoa testa positivo e não quando
          ela é de fato infecciosa. Então é importante levar em consideração que
          os valores do Rt podem estar alguns dias atrasados.
        </li>
      </ul>
    </div>
  )
}

export default Footer
