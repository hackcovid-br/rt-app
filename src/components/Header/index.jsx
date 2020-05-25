import "./Header.scss"

import Navbar from "components/Navbar";
import Container from "containers/Container";
import { StaticQuery, graphql } from 'gatsby';


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
        <Navbar navItems={data.site.siteMetadata.menuLinks} />
      </Container>
    )} 
  />
    
  )
}

export default Header
