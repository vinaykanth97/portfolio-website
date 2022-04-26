import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper } from "../styles/baseStyles"
import styled from "styled-components"
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
    <TopBanner bannerImage={developerImage.sourceUrl}>
      <Wrapper>
        <div className="content">
          <p className="dialogue">Hello, I am</p>
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
      </Wrapper>
    </TopBanner>
  )
}
const TopBanner = styled.div`
  height: 100vh;
  background-image: url(${props => props.bannerImage});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 70%;
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

export default Banner
