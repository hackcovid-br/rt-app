import React from 'react';
import './Cases.scss';
import NavigationButton from 'components/NavigationButton';

export default function Cases() {
    return (
        <section id="cases">
            <div className="wrapper">
                <div className="description">
                    <h2 className="silver-chalice">
                        Novos casos<span className="red-berry">.</span>
                    </h2>
                    <p>
                        É importante todos nós acompanharmos como a
                        <span className="red-berry"> pandemia está evoluindo </span>
                        em nosso país.
                    </p>
                    <p>
                        Na falta de uma vacina,
                        <span className="red-berry"> informação é o melhor remédio. </span>
                        Espalhe conhecimento e <span className="red-berry">não</span> o coronavirus.
                    </p>
                    <NavigationButton label="Veja Agora" />
                </div>
            </div>
        </section>
    )
} 