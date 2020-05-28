import "./Footer.scss";
import Container from "containers/Container";
import { useRef, useEffect } from "react";


function Footer({ rtState, rtSetState }) {
  const apiLinkRef = useRef(null);

  useEffect(() => {
    rtSetState({
      ...rtState,
      apiLinkRef
    });
  }, [])


  return (
    <div className="footer-container">
      <Container>
        <h3 className="footer-title">Recursos</h3>
        <ul className="footer-description-list">
          <li className="footer-description-item">
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
          <li ref={apiLinkRef} className="footer-description-item">
            <a className="link" href="https://github.com/wcota/covid19br">
              API
            </a>{" "}
            dos dados usados no modelo.
          </li>
        </ul>
        <h3 className="footer-title">Limitações da metodologia</h3>
        <ul className="footer-description-list">
          <li className="footer-description-item">
            Nossa base de dados é sujeita a dois principais efeitos: o primeiro,
            é o efeito da subnotificação e o segundo, é o efeito do baixo número
            de testes no Brasil. Mesmo assim, o que mais importa é a variação
            entre os números de casos — mas que também pode ser afetada se tiver
            uma grande variação no número de testes disponíveis.
          </li>
          <li className="footer-description-item">
            Existe um período de incubação onde pessoas conseguem infectar
            outras pessoas mas não mostram nenhum sintoma. Esse modelo assume
            que a infecciosidade começa quando uma pessoa testa positivo e não
            quando ela é de fato infecciosa. Então é importante levar em
            consideração que os valores do 
            {" "}<em>
              R<sub>t</sub>
            </em>{" "}
            podem estar alguns dias atrasados.
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Footer
