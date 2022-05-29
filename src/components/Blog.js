import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents, OverlayEffect, ContentTop } from "../styles/baseStyles"
import BlogSlider from "./BlogSlider"
import elementContext from "./ElementContext"
import { RevealEffectStraight } from "./allAnimations"
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
    <div className="common-sec" id="blog" ref={blog.reference} data-placement="4">
      <Wrapper>
        <Topcontents>
          <ContentTop>
            <h2>{blogData.allWpPage.edges[0].node.blogtopcontents.title}</h2>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
          <ContentTop>
            <p>{blogData.allWpPage.edges[0].node.blogtopcontents.description}</p>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
        </Topcontents>
        <BlogSlider />
      </Wrapper>
    </div>
  )
}

export default Blog
