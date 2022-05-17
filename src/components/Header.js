import React, {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react"
import { useState } from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
import { motion } from "framer-motion"
import elementContext from "./ElementContext"
import LogoAnimation from "./LogoAnimation"
const Header = () => {
  // const headerData = useStaticQuery(graphql`
  //   query headerQuery {
  //     wp {
  //       siteLogo {
  //         sourceUrl
  //       }
  //     }
  //   }
  // `)
  console.log("Rerendering")

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
  // const HandleScrollClick = useCallback(
  //   index => {
  //     menuListItems.filter((menuList, i) => {
  //       if (index === menuList.id) {
  //         let currentElementTop =
  //           elementsList[menuList.abb].reference.current.offsetTop -
  //           headerRef.current.offsetHeight
  //         window.scrollTo({
  //           top: currentElementTop,
  //           left: 0,
  //           behavior: "smooth",
  //         })
  //         menuList.active = true
  //         setActiveList(menuListItems)
  //       }
  //       return false
  //     })
  //   },
  //   [menuListItems]
  // )

  // const HandleScrollSpy = useCallback(
  //   e => {
  //     let currentTop = window.pageYOffset
  //     menuListItems.filter((menuList, i) => {
  //       let contTop =
  //         elementsList[menuList.abb].reference.current.offsetTop -
  //         headerRef.current.offsetHeight -
  //         10
  //       let contBottom =
  //         contTop + elementsList[menuList.abb].reference.current.offsetHeight

  //       if (currentTop >= contTop && currentTop <= contBottom) {
  //         menuListItems[i].active = true
  //         setActiveList(menuListItems)
  //       }
  //       return false
  //     })
  //     if (
  //       window.scrollY <
  //       elementsList[menuListItems[0].abb].reference.current.offsetTop
  //     ) {
  //       menuListItems[0].active = false
  //       setActiveList(menuListItems)
  //     }
  //   },
  //   [menuListItems]
  // )

  const HandleScrollClick = index => {
    let menuArray = menuListItems.filter((menuList, i) => {
      if (index === menuList.id) {
        let currentElementTop =
          elementsList[menuList.abb].reference.current.offsetTop -
          headerRef.current.offsetHeight
        window.scrollTo({
          top: currentElementTop,
          left: 0,
          behavior: "smooth",
        })
        menuList.active = true
      } else {
        menuList.active = false
      }
      return menuList
    })
    setActiveList(menuArray)
  }
  const [sl, setsl] = useState(false)
  const HandleScrollSpy = useCallback(() => {
    let currentTop = window.pageYOffset
    let menuListArray = menuListItems.filter((menuList, i) => {
      let contTop =
        elementsList[menuList.abb].reference.current.offsetTop -
        headerRef.current.offsetHeight -
        10
      let contBottom =
        contTop + elementsList[menuList.abb].reference.current.offsetHeight
      if (currentTop >= contTop && currentTop <= contBottom) {
        menuListItems[i].active = true
        return menuListItems
      } else {
        menuListItems[i].active = false
        return menuListItems
      }
    })

    if (
      window.scrollY <=
      elementsList[menuListItems[0].abb].reference.current.offsetTop
    ) {
      menuListArray[0].active = false
    }
    setActiveList(menuListArray)
  }, [menuListItems, elementsList])

  useEffect(() => {
    window.addEventListener("scroll", HandleScrollSpy)
    return () => {
      window.removeEventListener("scroll", HandleScrollSpy)
    }
  }, [HandleScrollSpy])

  return (
    <Headerst ref={headerRef}>
      <Wrapper>
        <div className="d-flex space-between align-center header-align">
          <Logo>
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
  figure {
    img {
      width: 6em;
    }
  }
  .menu-items {
    flex-basis: 92%;
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
  flex-basis: 8%;
  cursor: pointer;
`
export default Header
