import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
import showcaseBg from "../images/showcase.jpg"
import { motion } from "framer-motion"
import { fadeEffect } from "./allAnimations"
const ShowCase = () => {
  const showCaseDatas = useStaticQuery(graphql`
    query showCaseQuery {
      allWpPage {
        edges {
          node {
            showcaseItem {
              awards
              clients
              projects
              yearsExperience
            }
          }
        }
      }
    }
  `)
  const { awards, clients, projects, yearsExperience } =
    showCaseDatas.allWpPage.edges[0].node.showcaseItem

  return (
    <ShowCaseSec>
      <Wrapper>
        <motion.div className="d-flex showcase-wrap" variants={fadeEffect} initial="hidden" whileInView="visible"  viewport={{ once: true }}>
          <motion.div className="showcases" variants={fadeEffect}>
            <h5>{clients}</h5>
            <p>Clients</p>
          </motion.div>
          <motion.div className="showcases" variants={fadeEffect}>
            <h5>{projects}</h5>
            <p>Projects</p>
          </motion.div>
          <motion.div className="showcases" variants={fadeEffect}>
            <h5>{awards}</h5>
            <p>Awards</p>
          </motion.div>
          <motion.div className="showcases" variants={fadeEffect}>
            <h5>{yearsExperience}</h5>
            <p>Years Experience</p>
          </motion.div>
        </motion.div>
      </Wrapper>
    </ShowCaseSec>
  )
}

const ShowCaseSec = styled.div`
  min-height: 15em;
  padding: 5em 0;
  background-size: cover;
  background-image: url(${showcaseBg});
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.91);
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .showcase-wrap {
    justify-content: space-between;
    .showcases {
      text-align: center;
      flex-basis: 18%;
      padding: 3em 0;
      border: 1px dashed #707070;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background: #111111;
      z-index: 2;
      transition: 0.3s all ease;
      &:hover {
    background-image: linear-gradient(130deg,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc);
    animation: gradient-hover 2s ease-in-out forwards;
    background-size: 200% 200%;
   
@keyframes gradient-hover { 
    from{
      background-position:10% 0%
    }
    to{
      background-position:91% 100%
    }
}
      }
    }
  }
`
export default ShowCase
