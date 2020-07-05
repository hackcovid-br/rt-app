import './Highlight.scss'
export default function Highlight ({ children, size, className }) {
  const classNameString = className + " highlight";
  
  return (
    <span className={classNameString} style={{
      fontSize: `${size}px`
    }}>
      {children}
    </span>
  )
}