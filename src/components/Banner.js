import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper, PrimaryBtn, OverlayEffect } from "../styles/baseStyles"
import carot from "../images/chevron-down.png"
import styled from "styled-components"
import { bannerFadeIn, scaleEffect, fadeIn } from "./allAnimations"
import { motion } from "framer-motion"
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
    <TopBanner>
      <motion.div
        className="banner-img"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={developerImage.sourceUrl}
          alt=""
          variants={scaleEffect}
        />
        <OverlayEffect variants={bannerFadeIn}></OverlayEffect>
      </motion.div>
      <Wrapper>
        <div className="content">
          <p className="dialogue">Hello, I am</p>
          <div className="main-content">
            <h1>{personName}</h1>
            <p>{personDescription}</p>
          </div>
          <PrimaryBtn
            href={personResume.localFile.publicURL}
            title={personResume.title}
            download
          >
            Download CV
          </PrimaryBtn>
        </div>
      </Wrapper>
    </TopBanner>
  )
}
const TopBanner = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  .banner-img {
    position: absolute;
    right: 0;
    max-width: 70%;
    img {
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .dialogue {
      padding: 0.5em 1em;
      background-color: #ff4900;
      display: inline-block;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -0.65em;
        width: 1em;
        height: 1em;
        left: 50%;
        transform: translateX(-50%);
        background: url(${carot}) no-repeat;
        background-size: cover;
      }
    }
    .main-content {
      margin: 1em 0 2.5em;
      h1 {
        margin-bottom: 0.15em;
      }
    }
  }
`

export default Banner
