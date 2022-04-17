import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
const Blog = () => {
  const blogData = useStaticQuery(graphql`
    query blogQuery {
      allWpPost {
        edges {
          node {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Link to="/Header">test</Link>
    </>
  )
}
export default Blog
