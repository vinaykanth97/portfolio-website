import React, { useContext, useRef, useEffect } from "react"
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
import codingPerson from "../images/the-coder.json"
import ElementContext from "./ElementContext"
import gsap from "gsap/dist/gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ItObserver from "../reusable-hooks/ItObserver"
import LineAnime from "../components/LineAnime"
const Banner = () => {
  gsap.registerPlugin(ScrollToPlugin)
  const bannerData = useStaticQuery(graphql`
    query BannerQuery {
      wp {
        pages {
          edges {
            node {
              bannerContents {
                personDescription
                personName
                personResume {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  `)
    // console.log(bannerData.wp)
  let { personName, personDescription, personResume } =
    bannerData.wp.pages.edges[0].node.bannerContents
  const downSection = useContext(ElementContext)
  const ScrollDownHandler = () => {
    let aboutTop = downSection.about.reference.current.offsetTop
    gsap.to(window, {
      duration: 1.2,
      scrollTo: aboutTop,
      ease: "circ.inOut",
    })
  }
  const observerCall = ItObserver()
  const bannerRef = useRef(null)
  useEffect(() => {
    observerCall.main.observe(bannerRef.current)
  }, [])
  return (
    <TopBanner ref={bannerRef}>
      <LineAnime />
      <Wrapper>
        <div className="mob-flex">
          <motion.div className="content">
            <ContentTop>
              <p className="dialogue">Hello, I am</p>
              <OverlayEffect
                variants={RevealEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></OverlayEffect>
            </ContentTop>
            <div className="main-content">
              <ContentTop>
                <h1>{personName}</h1>
                <OverlayEffect
                  variants={RevealEffect}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                ></OverlayEffect>
              </ContentTop>
              <ContentTop>
                <p>{personDescription}</p>
                <OverlayEffect
                  variants={RevealEffect}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                ></OverlayEffect>
              </ContentTop>
            </div>
            <ContentTop>
              <PrimaryBtn
                href={personResume.mediaItemUrl}
                title={personResume.title}
                target="_blank"
              >
                Download CV
              </PrimaryBtn>
              <OverlayEffect
                variants={RevealEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></OverlayEffect>
            </ContentTop>
          </motion.div>
          <motion.div
            className="banner-img"
            variants={bannerScaleEffect}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Lottie animationData={codingPerson} loop={true} />
          </motion.div>
        </div>

      </Wrapper>
      <motion.div
        id="scroll-down-animation"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3.5, duration: 2 }}
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
  @media(max-width:991px)and (orientation:portrait){
    height: auto;
    .mob-flex{
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
  #scroll-down-animation {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
    @media(max-width:991px)and (orientation:portrait){
      position: relative;
      transform:none;
      left: 0;
      margin-top: 3em;
    }
  }
  .mouse {
    margin: 0 auto;
    display: block;
    border-radius: 50px;
    border: 2px solid #5440b4;
    height: 50px;
    width: 30px;
    position: relative;
    overflow: hidden;
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
    @media(max-width:991px){
      height: auto;
      text-align: center;
      margin-bottom: 3em;
    }
    svg {
      position: absolute;
      right: 0;
      max-width: 55%;
      top: 40%;
      transform: translateY(-50%) !important;
      @media(max-width:991px) and (orientation:portrait){
   position: relative;
   top:0;
   transform: none !important;
  }
    }
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 22;
    @media(max-width:991px) and (orientation:portrait){
   position: relative;
   top:0;
   transform: none;
   text-align: center;
  }
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
