import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import elementContext from "./ElementContext"

const Services = () => {
  const servicesData = useStaticQuery(graphql`
    query serviceQuery {
      allWpServices {
        edges {
          node {
            serviceType {
              servicetype
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
  let { services } = useContext(elementContext)
  console.log("effect services")
  return (
    <ServicesSec className="common-sec" id="services" ref={services.reference}>
      <Wrapper>
        <Topcontents>
          <h2>{servicesTitle}</h2>
          <p>{serviceDescription}</p>
        </Topcontents>
        <div className="services-listings">
          {servicesList.map((serviceList, index) => {
            console.log()
            return (
              <ServicesItem key={index}>
                <figure
                  dangerouslySetInnerHTML={{
                    __html: serviceList.node.serviceType["servicetype"],
                  }}
                ></figure>
                <p>{serviceList.node.title}</p>
              </ServicesItem>
            )
          })}
        </div>
      </Wrapper>
    </ServicesSec>
  )
}

const ServicesSec = styled.div`
  padding: 5em 0;
  .services-listings {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, calc(94% / 3));
    margin: 3em 0 0;
  }
`
const ServicesItem = styled.div`
  display: flex;
  padding: 1.2em 1.7em;
  background: #111111;
  box-shadow: 0px 15px 20px #00000014;
  transition: 0.3s all ease;
  align-items: center;
  p {
    flex-basis: 80%;
  }
  figure {
    flex-basis: 3.71em;
    height: 3.5em;
    background: #000000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1em 0 0;
    svg {
      max-width: 50%;
    }
  }
  &:hover {
    background: #ff4900;
    border-radius: 0.3em;
    figure {
      background-color: #fff;
    }
    svg {
      path {
        fill: #000;
      }
    }
  }
`
export default Services
