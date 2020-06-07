import "./Navbar.scss"
import { Link } from "gatsby"
import { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"

import { useMaxWidth } from 'hooks';



function ButtonToggleNavbar ({ state, setState }) {
  const buttonColor = "#d5d5d5";
  const buttonSize = 24;

  function toggleSidebar (e) {
    e.preventDefault();
    setState({
      showSidebar: !state.showSidebar,
    })
  }

  return (
    <button className="navbar__toggle" onClick={toggleSidebar}> 
      { state.showSidebar
        ? <FiX color={buttonColor} size={buttonSize} />
        : <FiMenu color={buttonColor} size={buttonSize} /> }
    </button>
  )
}


export default function Navbar() {
  
  const [state, setState] =  useState({
    showSidebar: false,
  })

  const isMobile = useMaxWidth();
  
  const navItems = [
    {
      name: "Rt",
      link: "/rt",
    },
  ];

  let classNameString = 'navbar';
  isMobile && (classNameString += ' navbar__mobile');
  state.showSidebar && (classNameString += ' visible');

  return (
    <>
      { isMobile && <ButtonToggleNavbar state={state} setState={setState} /> }

      <ul className={classNameString}>
        {navItems.map(item => (
          <li key={item.link}>
            <Link to={item.link} className={`navbar__item`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
