import React from 'react';
import FanChart from './FanChart.js'
import BarChart from './BarChart';
import './App.css';

function App() {
    return (
    <>
        <div className="bodyPage">
            <h1>R<sub>t</sub> Covid-19</h1>
            <p className="hackcovid">O que é o HackCovid?</p>
            <p className="hackcoviddescription">É um projeto social que tem como objetivo auxiliar na diminuição do impacto do covid-19 
            através de dados e machine learning. Nossa missão é calcular e mostrar em tempo real o Rt (número de reprodução do 
            vírus no tempo t) do covid-19 de todos os estados do Brasil. Uma vez com acesso a este dashboard, 
            o cidadão brasileiro consegue entender como o virus está se espalhando e quão efetivo estão sendo as 
            medidas de quarentena em sua região. E os governos estaduais, com a visão do Rt, conseguem avaliar melhor as
             medidas de restrição, para maximizar tanto a prosperidade econômica quanto a saúde e segurança de sua população.
            </p>
            <p className="whatsRt">O que é o Rt?</p>
            <p className="answerRt">Rt é o numero de reprodução do vírus no tempo t. Esse número descreve a média de  
            pessoas que são contaminadas por pessoa infectada. A forma mais conhecida dessa métrica é o número básico 
            de reprodução, R0 (r-zero) quando t=0. O problema do R0 é que ele não adapta a mudanças de comportamento ou 
            restrições governamentais e sociais, ele é fixo.
            Na forma que a pandemia evolui e as restrições aumentam ou diminuem, o Rt também muda. Quando Rt > 1, a 
            pandemia espalha para uma porção grande da população. Se o Rt menor que 1, a pandemia diminui rapidamente antes de 
            infectar muita gente.
            Inspirados pelo <a className="link" href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb">notebook</a> do Kevin Systrom, reproduzimos o modelo utilizando os dados do Brasil.
            </p>
            <p className="States">Comparação entre estados</p>
            <p className="latestWeek">Último Dia</p>
            <BarChart></BarChart>
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
                <br></br>
            </div>
        </>
    );
}

export default App;