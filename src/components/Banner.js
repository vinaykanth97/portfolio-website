import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Banner = () => {
  const bannerData = useStaticQuery(graphql`
    query BannerQuery {
      allWpPage {
        edges {
          node {
            bannerContents {
              personDescription
              personName
              developerImage {
                sourceUrl
                title
                altText
              }
              personResume {
                title
                publicUrl
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)

  let { personName, personDescription, developerImage, personResume } =
    bannerData.allWpPage.edges[0].node.bannerContents
  return (
    <div className="top-banner">
      <div className="container">
        <h1>{personName}</h1>
        <p>{personDescription}</p>
        <a
          href={personResume.localFile.publicURL}
          title={personResume.title}
          download
        >
          Download CV
        </a>
      </div>
    </div>
  )
}

export default Banner
