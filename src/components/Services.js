import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
  const servicesData = useStaticQuery(graphql`
    query serviceQuery {
      allWpPage {
        nodes {
          ourServices {
            serviceDescription
            servicesTitle
          }
        }
      }
      allWpServices {
        edges {
          node {
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default Services
