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
  return (
    <div className="about">
      <div className="container">
        <div className="d-flex">
          <div className="about-img">
            <img src={aboutImage.sourceUrl} alt="" />
            <div className="years-exp">
              <p>{experienceYears}</p>
            </div>
          </div>
          <div className="about-content">
            <h2>{aboutTitle}</h2>
            <p>{aboutDescription}</p>
            {aboutSkillsets.map(aboutSkills => {
              let { technologyName, percentage } = aboutSkills.node.allSkillsets
              console.log(technologyName)
              return (
                <div className="skillset-level">
                  <h6>{technologyName}</h6>
                  <div className="line-overlay">
                    <span
                      className="skill-percent"
                      style={{ width: `${percentage}%` }}
                    ></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
