import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { IoMenu, IoClose } from "react-icons/io5";
import { StaticImage } from "gatsby-plugin-image";
import "./header.css";

const Header = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return(
  <div className="header">
  <div className="logo-nav">
    <div className="logo-container">
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </div>
    <ul className={click ? "nav-options active" : "nav-options"}>
      <li className="option" onClick={closeMobileMenu}>
        <Link to="/">Home</Link>
      </li>
      <li className="option" onClick={closeMobileMenu}>
        <Link to="/restaurants">Restaurants</Link>
      </li>
    </ul>
  </div>
  <div className="mobile-menu" onClick={handleClick}>
    {click ? (
      <button className="menu-icon"><IoClose/></button>
      
    ) : (
      <button className="menu-icon"><IoMenu/></button>
    )}
  </div>
</div>
)
}

export default Header
