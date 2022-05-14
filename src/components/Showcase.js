import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"
import showcaseBg from "../images/showcase.jpg"
const ShowCase = () => {
  const showCaseDatas = useStaticQuery(graphql`
    query showCaseQuery {
      allWpPage {
        edges {
          node {
            showcaseItem {
              awards
              clients
              projects
              yearsExperience
            }
          }
        }
      }
    }
  `)
  const { awards, clients, projects, yearsExperience } =
    showCaseDatas.allWpPage.edges[0].node.showcaseItem
  return (
    <ShowCaseSec>
      <Wrapper>
        <div className="d-flex showcase-wrap">
          <div className="showcases">
            <h5>{clients}</h5>
            <p>Clients</p>
          </div>
          <div className="showcases">
            <h5>{projects}</h5>
            <p>Projects</p>
          </div>
          <div className="showcases">
            <h5>{awards}</h5>
            <p>Awards</p>
          </div>
          <div className="showcases">
            <h5>{yearsExperience}</h5>
            <p>Years Experience</p>
          </div>
        </div>
      </Wrapper>
    </ShowCaseSec>
  )
}

const ShowCaseSec = styled.div`
  min-height: 15em;
  padding: 5em 0;
  background-size: cover;
  background-image: url(${showcaseBg});
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.91);
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .showcase-wrap {
    justify-content: space-between;
    .showcases {
      text-align: center;
      flex-basis: 18%;
      padding: 3em 0;
      border: 1px dashed #707070;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background: #111111;
      z-index: 2;
      border-radius: 0.3em;
      transition: 0.3s all ease;
      &:hover {
        background-color: #ff4900;
        border: transparent;
      }
    }
  }
`
export default ShowCase
