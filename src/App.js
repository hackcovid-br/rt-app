import React from 'react';
import FanChart from './FanChart.js';
import BarChart from './BarChart';
import logo from './assets/logo_HC.png';
import './App.css';

function App() {
    return (
    <>
        <div className="bodyPage">
            <img className="logohc" src={logo} alt="HackCovid19" />
            <h1 className="rtcovid">R<sub>t</sub> Covid-19</h1>
            <p className="whatsRt">O que é o <em>R<sub>t</sub></em>?</p>
            <p className="answerRt"><em>R<sub>t</sub></em>  é o numero de reprodução do vírus no tempo <em>t</em>. Esse número descreve a média de  
            pessoas que são contaminadas por pessoa infectada. A forma mais conhecida dessa métrica é o número básico 
            de reprodução, <em>R<sub>0</sub></em> (r-zero) quando <em>t</em> = 0. O problema do <em>R<sub>0</sub></em> é que ele não adapta a mudanças de comportamento ou 
            restrições governamentais e sociais, ele é fixo.
            Na forma que a pandemia evolui e as restrições aumentam ou diminuem, o <em>R<sub>t</sub></em> também muda. Quando o <em>R<sub>t</sub></em> > 1, a 
            pandemia espalha para uma porção grande da população. Se o <em>R<sub>t</sub></em> for menor que 1, a pandemia diminui rapidamente antes de 
            infectar muita gente.
            </p>
            <p className="States">Comparação entre estados</p>
            <p className="latestWeek">Dados até:</p>
            <div className="barchartstyle">
                <BarChart></BarChart>
            </div>
            <div className="allState">
                <div className="uniqueState">
                    <p>Acre</p>
                    <FanChart className="state" uf={"AC"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Alagoas</p>
                    <FanChart className="state" uf={"AL"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Amapá</p>
                    <FanChart className="state" uf={"AP"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Amazonas</p>
                    <FanChart className="state" uf={"AM"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Bahia</p>
                    <FanChart className="state" uf={"BA"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Ceará</p>
                    <FanChart className="state" uf={"CE"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Distrito Federal</p>
                    <FanChart className="state" uf={"DF"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Espírito Santo</p>
                    <FanChart className="state" uf={"ES"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Goiás</p>
                    <FanChart className="state" uf={"GO"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Maranhão</p>
                    <FanChart className="state" uf={"MA"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Mato Grosso</p>
                    <FanChart className="state" uf={"MT"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Mato Grosso do Sul</p>
                    <FanChart className="state" uf={"MS"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Minas Gerais</p>
                    <FanChart className="state" uf={"MG"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Pará</p>
                    <FanChart className="state" uf={"PA"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Paraíba</p>
                    <FanChart className="state" uf={"PB"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Paraná</p>
                    <FanChart className="state" uf={"PR"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Pernambuco</p>
                    <FanChart className="state" uf={"PB"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Piauí</p>
                    <FanChart className="state" uf={"PI"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Rio de Janeiro</p>
                    <FanChart className="state" uf={"RJ"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Rio Grande do Norte</p>
                    <FanChart className="state" uf={"RN"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Rio Grande do Sul</p>
                    <FanChart className="state" uf={"RS"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Rondônia</p>
                    <FanChart className="state" uf={"RO"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Roraima</p>
                    <FanChart className="state" uf={"RR"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Santa Catarina</p>
                    <FanChart className="state" uf={"SC"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>São Paulo</p>
                    <FanChart className="state" uf={"SP"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Sergipe</p>
                    <FanChart className="state" uf={"SE"}></FanChart>
                </div>
                <div className="uniqueState">
                    <p>Tocantins</p>
                    <FanChart className="state" uf={"TO"}></FanChart>
                </div>
            </div>
        </div>
            <br></br>
            <div className="Footer">
                <br></br>
                <p className="footertitle">Recursos</p>
        <ul>
          <li>
           Jupyter <a className="link" href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb">notebook</a> do Kevin Systrom com sua metodologia para calcular <em>R<sub>t</sub></em>. 
          </li>
	<li>
           <a className="link" href="https://github.com/wcota/covid19br">API</a> dos dados usados no modelo.
          </li>
	</ul>
                <p className="footertitle">Limitações da metodologia</p>
		 <ul>
          <li>
		Nossa base de dados é sujeita a dois principais efeitos: o primeiro, é o efeito da subnotificação e o segundo, 
		é o efeito do baixo número de testes no Brasil. Mesmo assim, o que mais importa é a variação entre os números de casos, 
		mas que também pode ser afetada se tiver uma grande variação no número de testes disponíveis. 
          </li>
        <li>
		Existe um período de incubação onde pessoas conseguem infectar outras pessoas mas não mostram nenhum sintoma. 
		Esse modelo assume que a infecciosidade começa quando uma pessoa testa positivo e não quando ela é de fato infecciosa. 
		Então é importante levar em consideração que os valores do Rt podem estar alguns dias atrasados. 
          </li>
        </ul>
                <br></br>
            </div>
        </>
    );
}

export default App;
