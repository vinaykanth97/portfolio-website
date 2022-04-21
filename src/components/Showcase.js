import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ShowCase = () => {
  const showCaseDatas = useStaticQuery(graphql`
    query showCaseQuery {
      allWpPage {
        edges {
          node {
            showcaseItem {
              showcaseGroups {
                awards
                clients
                fieldGroupName
                projects
                yearsExperience
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>ShowCase</h1>
    </div>
  )
}
export default ShowCase
