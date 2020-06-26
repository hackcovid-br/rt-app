import { Link } from "gatsby"

export default function NavLinks ({ isVisible }) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Transmissão",
      link: "/rt",
    },
    {
      name: "Mobilidade",
      link: "/mobilidade",
    },
    {
      name: "Casos",
      link: "/casos"
    },
    {
      name: "Sobre",
      link: "/sobre"
    },
  ];
  
  const pathname = window.location.pathname;

  return (
    <ul className={ `navbar ${isVisible ? 'visible' : ''}`} >
      {navItems.map(item => (
        <li key={item.link}>
          { 
            pathname !== item.link &&
              <Link to={item.link} className="navbar__item">
                {item.name}
              </Link> 
          }
          { 
            pathname === item.link &&
              <span className="navbar__item current">
                {item.name}
              </span> 
          }
        </li>
      ))}
    </ul>
  )
}