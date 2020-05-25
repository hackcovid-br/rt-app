import './Navbar.scss';

import { Link } from 'gatsby';

export default function Navbar ({ navItems }) {

  return (
    <ul className="navbar">
      {navItems.map(item => (
        <li key={item.link}>
          <Link to={item.link} 
            className={`nav-item`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}