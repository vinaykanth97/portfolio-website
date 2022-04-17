import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = () => {
  const portfolioDatas = useStaticQuery(graphql`
    query portfolioQuery {
      allWpPage {
        edges {
          node {
            portfolioutils {
              portfoliodescription
              portfoliotitle
            }
          }
        }
      }
      allWpPortfolio {
        edges {
          node {
            portfolio {
              portfolioProjects {
                portfolio1 {
                  fieldGroupName
                  portfolioDescription
                  portfolioImage {
                    sourceUrl
                  }
                  portfolioMode
                  portfolioStack
                  portfolioUrl
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  )
}
export default Portfolio
