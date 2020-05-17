import React from 'react';
import logo from '../assets/logo_HC.png';

export default function Header () {
  return (
    <header>
      <img className="logohc" src={logo} alt="HackCovid19" />
    </header>
  )
}
