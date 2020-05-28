import "./Header.scss"

import Navbar from "components/Navbar";
import Container from "containers/Container";
import { Link, StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

function Header() {

  function handleRender (data) {
    const siteMetadata = data.site.siteMetadata;
    return (
      <header className="header">
        <Container className="header__container">
          <Helmet>
            <title>{ siteMetadata.title }</title>
            <meta name="description" content={siteMetadata.description} />
          </Helmet>
          <Link to="/">
            <img className="logo" src="/images/header_logo.png" alt={siteMetadata.title} />
          </Link>
          <Navbar navItems={siteMetadata.menuLinks} />
        </Container>
      </header>
    )
  }

  return (
    <StaticQuery query={
      graphql`
        query HeadingQuery {
          site {
            siteMetadata  {
              title
              description
              menuLinks {
                name
                link
              }
            }
          }
        }
      `
    }
    render={ handleRender }
  />
    
  )
}

export default Header
