import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
    </Layout>
  )
}

export default IndexPage
