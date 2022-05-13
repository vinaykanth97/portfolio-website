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
  padding: 1.3em 0;
  figure {
    img {
      width: 6em;
    }
  }
  .space-between {
    justify-content: space-between;
  }
  li {
    margin: 0 0.9em;
    padding: 1.1em 0 0;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      display: inline-block;
      position: relative;
      padding-bottom: 0.4em;
      overflow: hidden;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 0;
        border-bottom: 0.2em solid #ff4900;
        bottom: 0;
        right: 0;
        transition: 0.6s all ease-out;
      }

      &:hover,
      &:focus,
      &:active {
        &::after {
          animation: menuLine 1s forwards;
          width: 100%;
          right: auto;
          left: 0;
        }
      }
    }
  }
`
const Logo = styled.figure`
  margin: 0.6em 0 0;
`
export default Header
