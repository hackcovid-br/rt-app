import "./Navbar.scss"
import { Link } from "gatsby"
import { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"

import { useMaxWidth } from 'hooks'



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
      name: "Home",
      link: "/",
    },{
      name: "Rt",
      link: "/rt",
    },
  ];

  return (
    <>
      { isMobile && <ButtonToggleNavbar 
        isVisible={state.showSidebar} 
        toggleSidebar={toggleSidebar} /> }

      <ul className="navbar" 
        style={ isMobile && !state.showSidebar 
          ? {transform: 'translateX(100%)'} 
          : {transform: 'translateX(0)'}} 
      >
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
