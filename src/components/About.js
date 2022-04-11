import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const About = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutQuery {
      allWpPage {
        nodes {
          about {
            aboutDescription
            aboutTitle
            experienceYears
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
  console.log(aboutData)
  return (
    <div className="about">
      <div className="container">
        <div className="d-flex">
          <div className="about-img">
            <img src="" alt="" />
            <div className="years-exp"></div>
          </div>
          <div className="about-content">
            <h2></h2>
            <p></p>
            <div className="skillset-level">
              <h6></h6>
              <div className="line-overlay">
                <span className="skill-percent"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
