
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {createGlobalStyle} from 'styled-components'
import Navbar from '../components/Globals/navbar'
import Footer from '../components/Globals/Footer'
// import "./bootstrap.min.css"
 import "./layout.css"
import '../sass/layout.scss'


const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar/>
    {children}
    <Footer/>
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family:'Open Sans', sans-serif;
  color: #262626;
  background:#fff;  
}
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
