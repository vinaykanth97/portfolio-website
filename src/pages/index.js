import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Banner from "../components/Banner"
import About from "../components/About"
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <Banner />
      <About />
    </Layout>
  )
}

export default IndexPage
