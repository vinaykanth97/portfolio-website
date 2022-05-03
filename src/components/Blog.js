import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import BlogSlider from "./BlogSlider"
const Blog = () => {
  const blogData = useStaticQuery(graphql`
    query blogQuery {
      allWpPage {
        edges {
          node {
            blogtopcontents {
              description
              title
            }
          }
        }
      }
    }
  `)
  console.log(blogData)
  return (
    <BlogSec>
      <Wrapper>
        <Topcontents>
          <h2>{blogData.allWpPage.edges[0].node.blogtopcontents.title}</h2>
          <p>{blogData.allWpPage.edges[0].node.blogtopcontents.description}</p>
        </Topcontents>
        <BlogSlider />
      </Wrapper>
    </BlogSec>
  )
}
const BlogSec = styled.div`
  padding: 5em 0;
`
export default Blog
