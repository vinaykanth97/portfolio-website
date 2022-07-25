import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents, OverlayEffect, ContentTop } from "../styles/baseStyles"
import rightArrow from "../images/right-arrows.png"
import elementContext from "./ElementContext"
import { motion } from "framer-motion"
import { RevealEffectStraight, progressFadeEffect, PortfolioHover } from "./allAnimations"
import { AnimateSectionElementTop, AnimateSectionElementBottom } from "./AnimateSectionElement"
const Portfolio = () => {
  const portfolioDatas = useStaticQuery(graphql`
    query portfolioQuery {
      wp {
        allPortfolio {
          edges {
            node {
              portfolio {
                portfolioProjects {
                  portfolio1 {
                    portfolioDescription
                    portfolioMode
                    portfolioStack
                    portfolioUrl
                    portfolioImage {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
      wp {
        pages {
          edges {
            node {
              portfolioutils {
                portfoliodescription
                portfoliotitle
              }
            }
          }
        }
      }
    }
  `)
  const { portfolio } = useContext(elementContext)
  const { portfoliodescription, portfoliotitle } =
    portfolioDatas.wp.pages.edges[0].node.portfolioutils

  return (
    <PortfolioSec
      className="common-sec"
      id="portfolio"
      ref={portfolio.reference}
      data-placement="2"
    >
      <AnimateSectionElementTop />
      <Wrapper>
        <Topcontents>
          <ContentTop>
            <h2>{portfoliotitle}</h2>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
          <ContentTop>
            <p>{portfoliodescription}</p>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
        </Topcontents>
        <div className="portfolio">
          {portfolioDatas.wp.allPortfolio.edges.map((portfolioDatas, i) => {
            const {
              portfolioDescription,
              portfolioImage,
              portfolioMode,
              portfolioStack,
              portfolioUrl,
            } = portfolioDatas.node.portfolio.portfolioProjects.portfolio1
            return (
              <motion.div className="portfolio-item" key={i} variants={progressFadeEffect} initial={['hidden', 'unhover']} whileInView="visible" viewport={{ once: true }} custom={i} whileHover="hover" whileTap="hover" >
                <figure>
                  <img src={portfolioImage.sourceUrl} alt="" />
                </figure>
                <motion.a
                  className="portfolio-info"
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={PortfolioHover}
                >
                  <h6>{portfolioMode}</h6>
                  <p>{portfolioStack}</p>
                  <p className="desc">{portfolioDescription}</p>
                  <img src={rightArrow} alt="" />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </Wrapper>
      <AnimateSectionElementBottom />
    </PortfolioSec>

  )
}
const PortfolioSec = styled.div`
  .portfolio {
    display: grid;
    grid-gap: 1em 3em;
    grid-template-columns: repeat(auto-fill, calc(94% / 3));
    margin-top: 3em;
    @media(max-width:1024px){
      grid-template-columns: repeat(auto-fill,calc(96% / 2));
      grid-gap: 2em;
    }
    @media(max-width:991px) and (orientation:portrait){
      grid-template-columns: repeat(auto-fill,calc(95% / 2));
      grid-gap: 2em;
    }
    overflow: hidden;
    &-item {
      position: relative;
      overflow: hidden;
      img{
        /* width: 100%; */
      }
    }
    &-info {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to left bottom,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc);
      padding: 1em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: 0.6s all ease;
      &:hover {
    background-image: linear-gradient(130deg,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc);
    animation: gradient-hover 2s ease-in-out forwards;
    background-size: 200% 200%;
@keyframes gradient-hover { 
    from{
      background-position:10% 0%
    }
    to{
      background-position:91% 100%
    }
}
      }
      .desc {
        margin: 1.5em 0 1em;
      }
    }
  }
`
export default Portfolio
