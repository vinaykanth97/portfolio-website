import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { OverlayEffect, Wrapper, ContentTop } from "../styles/baseStyles"
import styled from "styled-components"
import elementContext from "./ElementContext"
import { RevealEffect, ProgressBarEffect, progressFadeEffect } from "./allAnimations"
import ItObserver from "../reusable-hooks/ItObserver"
import { motion } from 'framer-motion'
const About = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutQuery {
      allWpPage {
        nodes {
          about {
            aboutDescription
            aboutTitle
            experienceYears
            fieldGroupName
            aboutImage {
              sourceUrl
            }
          }
        }
      }
      allWpSkillset {
        edges {
          node {
            allSkillsets {
              technologyName
              percentage
            }
          }
        }
      }
    }
  `)

  let { aboutImage, experienceYears, aboutTitle, aboutDescription } =
    aboutData.allWpPage.nodes[0].about
  let aboutSkillsets = aboutData.allWpSkillset.edges
  console.log("effect About")

  const { about } = useContext(elementContext)
  const observerCall = ItObserver()
  const [useAnimate] = observerCall.scrollActions

  useEffect(() => {
    observerCall.main.observe(about.reference.current)
  }, [])

  return (
    <AboutSection
      className="common-sec"
      id="about"
      ref={about.reference}
      data-placement="0"
    >
      <Wrapper>
        <div className="d-flex">
          <div className="about-img">
            <ContentTop>
              <img src={aboutImage.sourceUrl} alt="" />
              <div className="years-exp">
                <p>
                  <span className="year-num">
                    {experienceYears < 10
                      ? `0${experienceYears}`
                      : experienceYears}
                  </span>
                  Years of Experience
                </p>
              </div>
              <OverlayEffect variants={RevealEffect} initial="hidden" animate={useAnimate ? 'visible' : 'hidden'}></OverlayEffect>
            </ContentTop>

          </div>
          <div className="about-content">
            <ContentTop>
              <h2>{aboutTitle}</h2>
              <OverlayEffect variants={RevealEffect} initial="hidden" animate={useAnimate ? 'visible' : 'hidden'}></OverlayEffect>
            </ContentTop>
            <ContentTop>
              <p>{aboutDescription}</p>
              <OverlayEffect variants={RevealEffect} initial="hidden" animate={useAnimate ? 'visible' : 'hidden'}></OverlayEffect>
            </ContentTop>
            <div className="skill-spacing">
              {aboutSkillsets.map((aboutSkills, i) => {
                let { technologyName, percentage } = aboutSkills.node.allSkillsets
                
                return (

                  <Skillset key={i} variants={progressFadeEffect} initial="hidden" animate={useAnimate ? 'visible' : 'hidden'} custom={i}>
                    <motion.p>
                      {technologyName} {percentage}%
                    </motion.p>
                    <ProgessBarMax>
                      <ProgressBarvalue
                        custom={i}
                        animate={useAnimate ? { width: `${percentage}%` } : { width: `0%` }}
                        transition={useAnimate ? { duration: 1, delay: i * 1 } : ''}
                      ></ProgressBarvalue>
                    </ProgessBarMax>
                  </Skillset>

                )
              })}
            </div>

          </div>
        </div>
      </Wrapper>
    </AboutSection>
  )
}
const AboutSection = styled.div`
  padding: 10em 0;
  .about-img {
    flex-basis: 50%;
    margin: 0 2em 0 0;
    position: relative;
    img {
      filter: grayscale(100%);
      background-color: #000;
      border-radius: 0.7em;
      width: 100%;
    }
    .years-exp {
      width: 100%;
      position: absolute;
      bottom: 0;
      background: linear-gradient( to left bottom,rgb(111 30 151 / 70%),rgb(100 49 166 / 70%),rgb(84 64 180 / 70%),rgb(61 77 193 / 70%),rgb(14 89 204 / 70%) );
      padding: 2em;
      text-align: center;
      border-radius: 0 0 0.7em 0.7em;
      p {
        font-size: 1.575em;
        font-weight: bold;
        line-height: 1.2;
      }
    }
    .year-num {
      display: block;
      font-size: 2em;
      font-weight: bold;
    }
  }
  .about-content {
    flex-basis: 50%;
    padding: 0 0 0 2em;
    h2 {
      margin: 0 0 0.5em;
    }
    .skill-spacing{
      margin-top: 1.5em;
    }
  }
`

const Skillset = styled(motion.div)`
  p {
    margin-bottom: 0.4em;
  }
`
const ProgessBarMax = styled(motion.div)`
  background-color: #707070;
  width: 100%;
  display: block;
  height: 0.25em;
  position: relative;
  margin: 0 0 1.5em;
`
const ProgressBarvalue = styled(motion.span)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 0%;
  background: linear-gradient( to left bottom,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc );
`
export default About
