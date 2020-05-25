import "./Header.scss"

import Container from "containers/Container";
import { Link, StaticQuery, graphql } from 'gatsby';


function Header() {
  return (
    <StaticQuery query={
      graphql`
        query HeadingQuery {
          site {
            siteMetadata  {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `
    }
    render={ data => (
      <Container tagName="header">
        <img className="logohc" src="/images/logo_HC.png" alt={data.site.siteMetadata.title} />
        <ul>
          {data.site.siteMetadata.menuLinks.map(item => (
            <li key={item.link}>
              <Link to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    )} 
  />
    
  )
}

export default Header
