import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Banner = () => {
  const bannerData = useStaticQuery(graphql`
    query MyQuery {
      allWpPost {
        edges {
          node {
            bannerContents {
              personDescription
              personName
              developerImage {
                uri
                title
              }
              personResume {
                uri
                title
              }
            }
          }
        }
      }
    }
  `)
  let bannerDataFormatted = bannerData.allWpPost.edges[0].node.bannerContents
  let { personDescription, personName, developerImage, personResume } =
    bannerDataFormatted
  return (
    <div>
      <h1>{personName}</h1>
    </div>
  )
}

export default Banner
