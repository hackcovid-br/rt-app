import "./Navbar.scss"

import { useState, useEffect } from 'react'

import { useMaxWidth } from 'hooks'

import ButtonToggleNavbar from './ButtonToggleNavbar'
import NavLinks from "./NavLinks"

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

  useEffect(() => {
    return () => {
      setState({
        showSidebar: false,
      })
    }

  }, [])

  return (
    <>
      { isMobile && <ButtonToggleNavbar 
        isVisible={state.showSidebar} 
        toggleSidebar={toggleSidebar} /> }

      <NavLinks isVisible={state.showSidebar} />

      { state.showSidebar && <span className="navbar__overlay" onClick={toggleSidebar} /> }
    </>
  )
}
