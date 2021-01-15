import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keyword={[`gatsby`,
  `application`, `react`]} />
    <h3>this is the menu page</h3>
  </Layout>
)

export default MenuPage
