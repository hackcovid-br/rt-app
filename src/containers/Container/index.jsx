import "./Container.scss";

export default function Container ({ children, tagName = "div", className= "" }) {
  const ContainerTag = tagName;
  return (
    <ContainerTag className={`container ${className}`}>
      {children}
    </ContainerTag>
  )
}