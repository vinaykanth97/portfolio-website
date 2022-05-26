import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents, OverlayEffect, ContentTop } from "../styles/baseStyles"
import elementContext from "./ElementContext"
import { motion } from "framer-motion"
import { RevealEffectStraight, progressFadeEffect } from "./allAnimations"

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



  return (
    <ServicesSec
      className="common-sec"
      id="services"
      ref={services.reference}
      data-placement="1"
    >
      <Wrapper>
        <Topcontents>
          <ContentTop>
            <h2>{servicesTitle}</h2>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </ContentTop>
          <ContentTop>
            <p>{serviceDescription}</p>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          </ContentTop>
        </Topcontents>
        <div className="services-listings">
          {servicesList.map((serviceList, index) => {
            return (
              <ServicesItem key={index} variants={progressFadeEffect} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
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
  padding:0 0 10em 0;
  .services-listings {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, calc(94% / 3));
    margin: 3em 0 0;
  }
`
const ServicesItem = styled(motion.div)`
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
    transition: 0.3s all ease;
    svg {
      max-width: 50%;
    }
  }
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
