import './Cases.scss';
import CasesInfo from 'components/CasesInfo';
import { useState, useEffect } from 'react';
import Button from 'components/Button';

export default function Cases() {
    const [casesData, setCasesData] = useState([]);

    const getCasesData = async () => {
        const url = 'https://hackcovid.s3-us-west-2.amazonaws.com/data/data_overview.json';
        const response = await fetch(url);
        const data = await response.json();
        setCasesData({ ...data });
    }

    useEffect(() => {
        getCasesData();
    }, []);

    const hasData = Object.values(casesData).length;
    const {
        total_confirmed: totalConfirmed,
        new_confirmed: newConfirmed,
        total_deaths: totalDeaths,
        new_deaths: newDeaths,
        recovered,
    } = casesData;
    return (
        <section id="cases">
            <div className="wrapper">
                <div className="title">
                    <h2>
                        Acompanhe como a pandemia está evoluindo em nosso país!
                    </h2>
                </div>
                <div className="cases-data">
                    {hasData && (
                        <>
                            <CasesInfo label="Casos confirmados" color="red" totalNumber={totalConfirmed} newNumbers={newConfirmed} />
                            <CasesInfo label="Recuperados" color="green" totalNumber={recovered} />
                            <CasesInfo label="Óbitos" color="gray" totalNumber={totalDeaths} newNumbers={newDeaths} />
                        </>
                    )}
                </div>
                <div className="button-wrapper">
                    <Button label="Veja Agora" />
                </div>
            </div>
        </section>
    )
} 