import "./Navbar.scss"
import { Link } from "gatsby"
import { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"

import { useMaxWidth } from 'hooks';



function ButtonToggleNavbar ({ isVisible, toggleSidebar }) {
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


export default function Navbar() {
  
  const [state, setState] =  useState({
    showSidebar: false,
  })

  function toggleSidebar () {
    setState({
      showSidebar: !state.showSidebar,
    })
  }

  const isMobile = useMaxWidth();
  
  const navItems = [
    {
      name: "Rt",
      link: "/rt",
    },
  ];

  let classNameString = 'navbar';
  state.showSidebar && (classNameString += ' visible');

  return (
    <>
      { isMobile && <ButtonToggleNavbar state={state} toggleSidebar={toggleSidebar} /> }

      <ul className={classNameString}>
        {navItems.map(item => (
          <li key={item.link}>
            <Link to={item.link} className={`navbar__item`} onClick={toggleSidebar}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      { state.showSidebar && <span className="navbar__overlay" onClick={toggleSidebar} /> }
    </>
  )
}
