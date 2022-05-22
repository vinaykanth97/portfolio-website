import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  PrimaryBtn,
  OverlayEffect,
  ContentTop,
} from "../styles/baseStyles"
import carot from "../images/chevron-down.png"
import styled from "styled-components"
import { bannerScaleEffect, RevealEffect, fadeEffect } from "./allAnimations"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import codingPerson from "../images/the-coder.json"
import ElementContext from "./ElementContext"
import gsap from "gsap/dist/gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
const Banner = () => {
  gsap.registerPlugin(ScrollToPlugin)
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

  let { personName, personDescription, personResume } =
    bannerData.allWpPage.edges[0].node.bannerContents
  const downSection = useContext(ElementContext)
  const ScrollDownHandler = () => {
    let aboutTop = downSection.about.reference.current.offsetTop
    gsap.to(window, {
      duration: 1.2,
      scrollTo: aboutTop,
      ease: "circ.inOut",
    })
  }

  return (
    <TopBanner>
      <Wrapper>
        <motion.div className="content">
          <ContentTop>
            <p className="dialogue">Hello, I am</p>
            <OverlayEffect
              variants={RevealEffect}
              initial="hidden"
              animate="visible"
            ></OverlayEffect>
          </ContentTop>
          <div className="main-content">
            <ContentTop>
              <h1>{personName}</h1>
              <OverlayEffect
                variants={RevealEffect}
                initial="hidden"
                animate="visible"
              ></OverlayEffect>
            </ContentTop>
            <ContentTop>
              <p>{personDescription}</p>
              <OverlayEffect
                variants={RevealEffect}
                initial="hidden"
                animate="visible"
              ></OverlayEffect>
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
            <OverlayEffect
              variants={RevealEffect}
              initial="hidden"
              animate="visible"
            ></OverlayEffect>
          </ContentTop>
        </motion.div>
        <motion.div
          className="banner-img"
          variants={bannerScaleEffect}
          initial="hidden"
          animate="visible"
        >
          <Lottie animationData={codingPerson} loop={true} />
        </motion.div>
      </Wrapper>
      <motion.div
        id="scroll-down-animation"
        variants={fadeEffect}
        initial="hidden"
        animate="visible"
        onClick={ScrollDownHandler}
      >
        <span class="mouse">
          <span class="move"></span>
        </span>
      </motion.div>
    </TopBanner>
  )
}
const TopBanner = styled(motion.div)`
  height: 100vh;
  position: relative;
  overflow: hidden;
  #scroll-down-animation {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
  }
  .mouse {
    margin: 0 auto;
    display: block;
    border-radius: 50px;
    border: 2px solid #5440b4;
    height: 50px;
    width: 30px;
    position: relative;
  }

  .move {
    position: absolute;
    background-image: linear-gradient(
      to left bottom,
      #6f1e97,
      #6431a6,
      #5440b4,
      #3d4dc1,
      #0e59cc
    );
    height: 10px;
    width: 10px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: move 2s linear infinite;
  }
  @keyframes move {
    0% {
      transform: translate(-50%, 10px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 40px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 80px);
      opacity: 0;
    }
  }
  .banner-img {
    position: relative;
    width: 100%;
    height: 100vh;
    svg {
      position: absolute;
      right: 0;
      max-width: 55%;
      top: 40%;
      transform: translateY(-50%) !important;
    }
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 22;
    .dialogue {
      padding: 0.5em 1em;
      background-image: linear-gradient(
        to left bottom,
        #6f1e97,
        #6431a6,
        #5440b4,
        #3d4dc1,
        #0e59cc
      );
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
