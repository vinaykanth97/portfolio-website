import React, { useContext, useEffect, useRef, useMemo } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
import { motion } from "framer-motion"
import elementContext from "./ElementContext"
import LogoAnimation from "./LogoAnimation"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"

const Header = () => {
  gsap.registerPlugin(ScrollToPlugin)
  const menuListItems = useMemo(
    () => [
      { title: "About Me", id: 0, active: false, abb: "about" },
      { title: "Services", id: 1, active: false, abb: "services" },
      { title: "Portfolio", id: 2, active: false, abb: "portfolio" },
      { title: "Testimonials", id: 3, active: false, abb: "testimonials" },
      { title: "Blog", id: 4, active: false, abb: "blog" },
      { title: "Contact Us", id: 5, active: false, abb: "contactUs" },
    ],
    []
  )

  let elementsList = useContext(elementContext)
  const headerRef = useRef(null)
  const [activeList, setActiveList] = useState([...menuListItems])

  const HandleScrollClick = index => {
    let menuArray = menuListItems.filter((menuList, i) => {
      if (index === menuList.id) {
        let currentElementTop =
          elementsList[menuList.abb].reference.current.offsetTop -
          headerRef.current.offsetHeight +
          50
        gsap.to(window, {
          duration: 1.2,
          scrollTo: currentElementTop,
          ease: "circ.inOut",
        })
        menuList.active = true
      } else {
        menuList.active = false
      }
      return menuList
    })
    setActiveList(menuArray)
  }

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.25,
    }
  }, [])

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(entries => {
      let updatedPoints = menuListItems.filter(menuList => {
        menuList.active = false
        return menuList
      })
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let currentComponentPlacement = parseInt(
            entry.target.getAttribute("data-placement")
          )
          menuListItems[currentComponentPlacement].active = true
        }
      })
      setActiveList(updatedPoints)
    }, options)
    function ObserverActivity(activity) {
      menuListItems.forEach(menus => {
        scrollObserver[activity](elementsList[menus.abb].reference.current)
      })
    }
    ObserverActivity("observe")
  }, [menuListItems, elementsList, options])

  useEffect(() => {
    gsap.set(headerRef.current, { yPercent: -100 })
    function HeaderPos() {
      if (window.pageYOffset > 100) {
        gsap.to(headerRef.current, {
          yPercent: 0,
          ease: "power2.In",
        })
      } else {
        gsap.to(headerRef.current, {
          yPercent: -100,
          ease: "power2.In",
        })
      }
    }
    HeaderPos()
    window.addEventListener("scroll", () => {
      HeaderPos()
    })
  }, [])

  console.log("effect Header")
  const ScrollToTopHandler = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: 0,
      ease: "circ.inOut",
    })
  }
  return (
    <Headerst ref={headerRef}>
      <Wrapper>
        <div className="d-flex space-between align-center header-align">
          <Logo onClick={ScrollToTopHandler}>
            <LogoAnimation />
          </Logo>
          <nav className="menu-items">
            <ul className="d-flex align-center">
              {activeList.map((menuList, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => HandleScrollClick(index)}
                    className={`${menuList.active ? "list-active" : ""}`}
                  >
                    <a>{menuList.title}</a>
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
  background: #181818;
  padding: 1.3em 0;
  /* opacity: 0; */
  figure {
    img {
      width: 6em;
    }
  }
  .menu-items {
    flex-basis: 95%;
    ul {
      justify-content: flex-end;
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
  flex-basis: 5%;
  cursor: pointer;
  height: 3em;
`
export default Header
