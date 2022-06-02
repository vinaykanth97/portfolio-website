import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper, Topcontents, OverlayEffect, ContentTop } from "../styles/baseStyles"
import BlogSlider from "./BlogSlider"
import elementContext from "./ElementContext"
import { RevealEffectStraight } from "./allAnimations"
import { AnimateSectionElementTop, AnimateSectionElementBottom } from "./AnimateSectionElement"
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
  let { blog } = useContext(elementContext)
  return (
    <div className="common-sec" id="blog" ref={blog.reference} data-placement="4">
      <AnimateSectionElementTop />
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
      <AnimateSectionElementBottom />
    </div>
  )
}

export default Blog
