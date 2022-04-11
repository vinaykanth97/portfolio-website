import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <header>
      <div className="container">
        <div className="d-flex">
          <figure className="site-logo">
            <img src={logoUrl} alt="Logo" title="Logo" />
          </figure>
          <nav className="menu-items">
            <ul>
              {menuListItems.map(menuList => {
                return (
                  <li>
                    <Link>{menuList}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
