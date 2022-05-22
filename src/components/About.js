import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper } from "../styles/baseStyles"
import styled from "styled-components"
import elementContext from "./ElementContext"
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
  const skillSetColors = ["#6F1E97", "#0E59CC"]
  const { about } = useContext(elementContext)
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
          </div>
          <div className="about-content">
            <h2>{aboutTitle}</h2>
            <p>{aboutDescription}</p>
            {aboutSkillsets.map((aboutSkills, i) => {
              let { technologyName, percentage } = aboutSkills.node.allSkillsets
              let bgColor = skillSetColors[i % skillSetColors.length]
              return (
                <Skillset key={i}>
                  <p>
                    {technologyName} {percentage}%
                  </p>
                  <ProgessBarMax>
                    <ProgressBarvalue
                      percentage={percentage}
                      bgColor={bgColor}
                    ></ProgressBarvalue>
                  </ProgessBarMax>
                </Skillset>
              )
            })}
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
    padding: 0 2em 0 0;
    position: relative;
    img {
      filter: grayscale(100%);
      background-color: #000;
      border-radius: 0.7em;
    }
    .years-exp {
      max-width: 12.4em;
      width: 100%;
      min-height: 12.4em;
      position: absolute;
      bottom: -9%;
      background: #111111;
      border-radius: 0.7em;
      display: flex;
      align-items: center;
      padding: 2em;
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
    & > p {
      margin-bottom: 1.5em;
    }
  }
`

const Skillset = styled.div`
  p {
    margin-bottom: 0.4em;
  }
`
const ProgessBarMax = styled.div`
  background-color: #707070;
  width: 100%;
  display: block;
  height: 0.25em;
  position: relative;
  margin: 0 0 1.5em;
`
const ProgressBarvalue = styled.span`
  position: absolute;
  top: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${props => props.bgColor};
`
export default About
