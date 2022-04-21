import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
const Blog = () => {
  const blogData = useStaticQuery(graphql`
    query blogQuery {
      allWpPost {
        edges {
          node {
            excerpt
            title
            slug
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

  blogData.allWpPost.edges.forEach(edge => {
    // console.log(edge.node)
  })
  return (
    <>
      {blogData.allWpPost.edges.map(slugData => {
        return <Link to={`/blog/${slugData.node.slug}`}>test</Link>
      })}
    </>
  )
}
export default Blog
