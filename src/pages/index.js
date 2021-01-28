import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaAws } from "react-icons/fa";
import Layout from "../components/layout"
import {HomeHeader, Banner, BannerButton, SectionButton} from '../utils'
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery-1'
import {Section} from '../utils'
import Menu from '../components/HomePageComponents/Menu'
 
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
<HomeHeader img={img}>
  <Banner title="eatery" subtitle="55 main street. Santa Monica, CA" >
    <BannerButton style={{margin: '2rem auto'}}>Our Menu</BannerButton>
    </Banner> 
</HomeHeader>
<QuickInfo/>
<Gallery/>
<Menu/>
  </Layout>

)

export default IndexPage
