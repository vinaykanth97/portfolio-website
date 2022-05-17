import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import rightArrow from "../images/right-arrows.png"
import elementContext from "./ElementContext"
const Portfolio = () => {
  const portfolioDatas = useStaticQuery(graphql`
    query portfolioQuery {
      allWpPage {
        edges {
          node {
            portfolioutils {
              portfoliodescription
              portfoliotitle
            }
          }
        }
      }
      allWpPortfolio {
        edges {
          node {
            portfolio {
              portfolioProjects {
                portfolio1 {
                  portfolioDescription
                  portfolioStack
                  portfolioUrl
                  portfolioMode
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
  `)
  const { portfolio } = useContext(elementContext)
  const { portfoliodescription, portfoliotitle } =
    portfolioDatas.allWpPage.edges[0].node.portfolioutils
  return (
    <PortfolioSec className="common-sec" id="portfolio" ref={portfolio.reference}>
      <Wrapper>
        <Topcontents>
          <h2>{portfoliotitle}</h2>
          <p>{portfoliodescription}</p>
        </Topcontents>
        <div className="portfolio">
          {portfolioDatas.allWpPortfolio.edges.map((portfolioDatas, index) => {
            const {
              portfolioDescription,
              portfolioImage,
              portfolioMode,
              portfolioStack,
              portfolioUrl,
            } = portfolioDatas.node.portfolio.portfolioProjects.portfolio1
            return (
              <div className="portfolio-item" key={index}>
                <figure>
                  <img src={portfolioImage.sourceUrl} alt="" />
                </figure>
                <a
                  className="portfolio-info"
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>{portfolioMode}</h6>
                  <p>{portfolioStack}</p>
                  <p className="desc">{portfolioDescription}</p>
                  <img src={rightArrow} alt="" />
                </a>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </PortfolioSec>
  )
}
const PortfolioSec = styled.div`
  padding: 5em 0;
  .portfolio {
    display: grid;
    grid-gap: 1em 3em;
    grid-template-columns: repeat(auto-fill, calc(94% / 3));
    margin-top: 3em;
    overflow: hidden;
    &-item {
      position: relative;
    }
    &-info {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #ff4900;
      padding: 1em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
      transition: 0.6s all ease;
      &:hover {
        opacity: 1;
      }
      .desc {
        margin: 1.5em 0 1em;
      }
    }
  }
`
export default Portfolio
