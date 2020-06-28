import './CasesInfo.scss';

export default function CasesInfo({ label, totalNumber, newNumbers, color }){
    return (
        <div className="cases-info">
            <div className={`signal ${color}`}>
            </div>
            <div className="infos">
                <span className="label">{label}</span>
                <span className={`total-cases ${color}`}>{totalNumber.toLocaleString()}</span>
                {newNumbers && <span className="new-numbers">+{newNumbers.toLocaleString()}</span>}
            </div>
        </div>
    )
}