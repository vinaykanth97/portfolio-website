import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import BlogSlider from "./BlogSlider"
import elementContext from "./ElementContext"

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
  console.log("effect Blog")
  let { blog } = useContext(elementContext)
  return (
    <BlogSec className="common-sec" id="blog" ref={blog.reference} data-placement="4">
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
  padding: 0 0 10em 0;
`
export default Blog
