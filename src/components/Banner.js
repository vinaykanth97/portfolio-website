import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  PrimaryBtn,
  OverlayEffect,
  ContentTop,
} from "../styles/baseStyles"
import carot from "../images/chevron-down.png"
import styled from "styled-components"
import { bannerScaleEffect, RevealEffect } from "./allAnimations"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import codingPerson from "../images/example-anime.json"
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
        variants={bannerScaleEffect}
        initial="hidden"
        animate="visible"
      >
        <Lottie animationData={codingPerson} loop={true} />
      </motion.div>
      <Wrapper>
        <motion.div className="content">
          <ContentTop >
            <p className="dialogue">Hello, I am</p>
            <OverlayEffect variants={RevealEffect} initial="hidden" animate="visible"></OverlayEffect>
          </ContentTop>
          <div className="main-content">
            <ContentTop>
              <h1>{personName}</h1>
              <OverlayEffect variants={RevealEffect} initial="hidden" animate="visible"></OverlayEffect>
            </ContentTop>
            <ContentTop>
              <p>{personDescription}</p>
              <OverlayEffect variants={RevealEffect} initial="hidden" animate="visible"></OverlayEffect>
            </ContentTop>
          </div>
          <ContentTop>
            <PrimaryBtn
              href={personResume.localFile.publicURL}
              title={personResume.title}
              download
            >
              Download CV
            </PrimaryBtn>
            <OverlayEffect variants={RevealEffect} initial="hidden" animate="visible"></OverlayEffect>
          </ContentTop>
        </motion.div>
      </Wrapper>
    </TopBanner>
  )
}
const TopBanner = styled(motion.div)`
  height: 100vh;
  position: relative;
  overflow: hidden;
  .banner-img {
    position: absolute;
    right: 0;
    max-width: 47%;
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
      margin: 0 0 0.5em;
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
