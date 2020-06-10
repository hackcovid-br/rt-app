import { FiMenu, FiX } from "react-icons/fi"

export default function ButtonToggleNavbar ({ isVisible, toggleSidebar }) {
  const buttonColor = "#d5d5d5";
  const buttonSize = 24;

  return (
    <button className="navbar__toggle" onClick={toggleSidebar}> 
      { isVisible
        ? <FiX color={buttonColor} size={buttonSize} />
        : <FiMenu color={buttonColor} size={buttonSize} /> }
    </button>
  )
}