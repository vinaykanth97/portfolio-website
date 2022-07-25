import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { OverlayEffect, Wrapper, ContentTop } from "../styles/baseStyles"
import styled from "styled-components"
import elementContext from "./ElementContext"
import { RevealEffect, progressFadeEffect } from "./allAnimations"
import ItObserver from "../reusable-hooks/ItObserver"
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import { AnimateSectionElementTop, AnimateSectionElementBottom } from "./AnimateSectionElement"
const About = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutQuery {
      wp {
        pages {
          edges {
            node {
              about {
                aboutDescription
                aboutTitle
                experienceYears
                aboutImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
      wp {
        allSkillset {
          edges {
            node {
              allSkillsets {
                percentage
                technologyName
              }
            }
          }
        }
      }
    }
  `)
  console.log(aboutData.wp)
  let { aboutImage, experienceYears, aboutTitle, aboutDescription } =
    aboutData.wp.pages.edges[0].node.about
  let aboutSkillsets = aboutData.wp.allSkillset.edges
  console.log(aboutData.wp.pages.edges[0].node.about)
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
      <AnimateSectionElementTop />
      <Wrapper>
        <div className="d-flex column-mob">
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
              <OverlayEffect variants={RevealEffect} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
            </ContentTop>

          </div>
          <div className="about-content">
            <ContentTop>
              <h2>{aboutTitle}</h2>
              <OverlayEffect variants={RevealEffect} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
            </ContentTop>
            <ContentTop>
              <p>{aboutDescription}</p>
              <OverlayEffect variants={RevealEffect} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
            </ContentTop>
            <div className="skill-spacing">
              {aboutSkillsets.map((aboutSkills, i) => {
                let { technologyName, percentage } = aboutSkills.node.allSkillsets
                return (

                  <Skillset key={i} variants={progressFadeEffect} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}>
                    <motion.p>

                      {technologyName} {
                        useAnimate &&
                        <CountUp end={percentage} delay={i * 1} suffix="%" duration="1" className="background-text" />
                      }
                    </motion.p>
                    <ProgessBarMax>
                      <ProgressBarvalue
                        custom={i}
                        transition={{ duration: 1 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                      ></ProgressBarvalue>
                    </ProgessBarMax>
                  </Skillset>

                )
              })}
            </div>

          </div>
        </div>
      </Wrapper>
      <AnimateSectionElementBottom />
    </AboutSection>
    // <></>
  )
}
const AboutSection = styled.div`
  .about-img {
    flex-basis: 50%;
    margin: 0 2em 0 0;
    position: relative;
    @media(max-width:991px) and (orientation:portrait){
      margin: 0 0 3em;
    }
    img {
      filter: grayscale(100%);
      background-color: #000;
      width: 100%;
    }
    .years-exp {
      width: 100%;
      position: absolute;
      bottom: 0;
      background: linear-gradient( to left bottom,rgb(111 30 151 / 70%),rgb(100 49 166 / 70%),rgb(84 64 180 / 70%),rgb(61 77 193 / 70%),rgb(14 89 204 / 70%) );
      padding: 2em;
      text-align: center;
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
    @media(max-width:991px) and (orientation:portrait){
     padding: 0;
    }
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
