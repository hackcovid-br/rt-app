import './Highlight.scss'
export default function Highlight ({ children }) {
  return (
    <span className="highlight">
      {children}
    </span>
  )
}