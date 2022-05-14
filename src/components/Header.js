import React from "react"
import ReactDOM from "react-dom"
import { useEffect, useState, useContext, useRef, useLayoutEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
import { motion } from "framer-motion"
import { headerShow } from "./allAnimations"
import ElementContext from "./ElementContext"
import { gsap } from "gsap/dist/gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)
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
    { title: "About Me", id: 0, active: false },
    { title: "Services", id: 1, active: false },
    { title: "Portfolio", id: 2, active: false },
    { title: "Testimonials", id: 3, active: false },
    { title: "Blog", id: 4, active: false },
    { title: "Contact Us", id: 5, active: false },
  ]
  const [activeList, setActiveList] = useState([...menuListItems])
  const HandleScrollSpy = index => {
    menuListItems.filter((menuList, i) => {
      if (index === menuList.id) {
        menuList.active = true
        setActiveList(menuListItems)
      }
    })
    console.log(activeList)
  }
  return (
    <Headerst>
      <Wrapper>
        <div className="d-flex space-between align-center header-align">
          <Logo>
            <img src={logoUrl} alt="Logo" title="Logo" />
          </Logo>
          <nav className="menu-items">
            <ul className="d-flex align-center">
              {activeList.map((menuList, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => HandleScrollSpy(index)}
                    className={`${menuList.active ? "list-active" : ""}`}
                  >
                    <Link>{menuList.title}</Link>
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
const Headerst = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
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
    &.list-active {
      a {
        &::after {
          animation: menuLine 1s forwards;
          width: 100%;
          right: auto;
          left: 0;
        }
      }
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
      &:focus {
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
