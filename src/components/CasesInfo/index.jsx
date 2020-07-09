import './CasesInfo.scss';

export default function CasesInfo({ label, totalNumber, newNumbers, color }){
    const imagePaths = {
        'green': '/icons/head-with-mask.svg',
        'gray': '/icons/iconDeath.svg',
        'red': '/icons/iconVirus.svg',
    };

    const currentImagePath = imagePaths[color];

    return (
        <div className="cases-info">
            <div className={`signal ${color}`}>
                <img src={currentImagePath} alt={`Icone ${label}`} />
            </div>
            <div className="infos">
                <span className="label">{label}</span>
                <span className={`total-cases ${color}`}>{totalNumber.toLocaleString()}</span>
                {newNumbers && <span className="new-numbers">+{newNumbers.toLocaleString()}</span>}
            </div>
        </div>
    )
}