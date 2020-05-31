import "./Navbar.scss"

import { Link } from "gatsby"

export default function Navbar() {
  const navItems = [
    {
      name: "Rt",
      link: "/",
    },
  ]

  return (
    <ul className="navbar">
      {navItems.map(item => (
        <li key={item.link}>
          <Link to={item.link} className={`navbar__item`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
