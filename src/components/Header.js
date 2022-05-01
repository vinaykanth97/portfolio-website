import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
const Header = () => {
  const headerData = useStaticQuery(graphql`
    query headerQuery {
      wp {
        siteLogo {
          sourceUrl
        }
      }
    }
  `)
  let logoUrl = headerData.wp.siteLogo.sourceUrl
  const menuListItems = [
    "About Me",
    "Services",
    "Portfolio",
    "Testimonials",
    "Blog",
    "Contact Us",
  ]
  return (
    <Headerst>
      <Wrapper>
        <div className="d-flex space-between align-center header-align">
          <Logo>
            <img src={logoUrl} alt="Logo" title="Logo" />
          </Logo>
          <nav className="menu-items">
            <ul className="d-flex align-center">
              {menuListItems.map((menuList, index) => {
                return (
                  <li key={index}>
                    <Link>{menuList}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </Headerst>
  )
}
const Headerst = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #000;
  .space-between {
    justify-content: space-between;
  }
  li {
    margin: 0 0.3em;
    &:last-of-type {
      margin: 0;
    }
    a {
      padding: 3.663em 1em 1.813em;
      display: inline-block;
      transition: 0.3s all ease;
      &:hover {
        background: #ff4900;
      }
    }
  }
`
const Logo = styled.figure`
  margin: 0.6em 0 0;
`
export default Header
