import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
const Services = () => {
  const servicesData = useStaticQuery(graphql`
    query serviceQuery {
      allWpServices {
        edges {
          node {
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
          }
        }
      }
      allWpPage {
        edges {
          node {
            ourServices {
              serviceDescription
              servicesTitle
            }
          }
        }
      }
    }
  `)
  const serviceUtils = servicesData.allWpPage.edges[0].node.ourServices
  let { servicesTitle, serviceDescription } = serviceUtils

  const servicesList = servicesData.allWpServices.edges
  return (
    <ServicesSec>
      <Wrapper>
        <Topcontents>
          <h2>{servicesTitle}</h2>
          <p>{serviceDescription}</p>
        </Topcontents>
        {servicesList.map((serviceList, index) => {
          console.log(serviceList)
          return <></>
        })}
      </Wrapper>
    </ServicesSec>
  )
}

const ServicesSec = styled.div`
  padding: 5em 0;
`

export default Services
