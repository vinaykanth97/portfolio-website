import * as React from "react"

import "../styles/style.css"
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
import CopyRight from "../components/CopyRight"
import GlobalStyle from "../styles/globalStyles"
import { ElementProvider } from "../components/ElementContext"
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <ElementProvider>
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
          <CopyRight />
        </ElementProvider>
      </Layout>
    </>
  )
}
export default IndexPage