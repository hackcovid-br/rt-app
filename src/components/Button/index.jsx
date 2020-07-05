import './Button.scss';

export default function Button({ onClick, label, className, type }){
    return (
        <button className={`default-button ${className}`} onClick={onClick} type={type}>
            {label}
        </button>
    )
}