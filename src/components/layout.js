import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
