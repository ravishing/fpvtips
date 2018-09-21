import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import AppBar from '../UI/AppBar'
import Footer from './footer'
import Wrapper from '../UI/Wrapper'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <AppBar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </React.Fragment>
    )}
  />
)

export default Layout
