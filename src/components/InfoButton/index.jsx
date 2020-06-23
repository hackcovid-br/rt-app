import './InfoButton.scss'
export default function InfoButton ({ onClick }) {
  return (
    <button
      className="info"
      title="Mais informações"
      onClick={onClick}
    >
      i
    </button> 
  )
} 