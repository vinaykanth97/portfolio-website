import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import ShowCase from "../components/Showcase"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import Blog from "../components/Blog"
import ContactUs from "../components/ContactUs"
import GlobalStyle from "../styles/globalStyles"
import "../styles/style.css"
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Seo title="Home" />
        <Header />
        <Banner />
        <About />
        <Services />
        <ShowCase />
        <Portfolio />
        <Testimonials />
        <Blog />
        <ContactUs />
      </Layout>
    </>
  )
}

export default IndexPage
