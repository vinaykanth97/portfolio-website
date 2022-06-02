import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import styled from "styled-components"
import { Wrapper, Topcontents, OverlayEffect, ContentTop } from "../styles/baseStyles"
import quoteStart from "../images/quote-start.png"
import quoteEnd from "../images/quote-end.png"
import "swiper/css"
import "swiper/css/pagination"
import elementContext from "./ElementContext"
import { motion } from "framer-motion"
import { RevealEffectStraight, progressFadeEffect } from "./allAnimations"
import { AnimateSectionElementTop, AnimateSectionElementBottom } from "./AnimateSectionElement"
const Testimonials = () => {
  const testimonialsData = useStaticQuery(graphql`
    query testimonialQuery {
      allWpPage {
        edges {
          node {
            testimonialUtils {
              testimonialsDescription
              testimonialsTitle
            }
          }
        }
      }
      allWpTestimonial {
        edges {
          node {
            featuredImage {
              node {
                sourceUrl
              }
            }
            testimonials {
              review
              reviewerName
              reviewerWorkplace
            }
          }
        }
      }
    }
  `)
  let { testimonialsDescription, testimonialsTitle } =
    testimonialsData.allWpPage.edges[0].node.testimonialUtils
  let { testimonials } = useContext(elementContext)
  return (
    <TestimonialsSec
      className="common-sec"
      id="testimonials"
      ref={testimonials.reference}
      data-placement="3"
    >
      <AnimateSectionElementTop />
      <Wrapper>
        <Topcontents>
          <ContentTop>
            <h2>{testimonialsTitle}</h2>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
          <ContentTop>
            <p>{testimonialsDescription}</p>
            <OverlayEffect variants={RevealEffectStraight} initial="hidden" whileInView="visible" viewport={{ once: true }}></OverlayEffect>
          </ContentTop>
        </Topcontents>
      </Wrapper>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonialsData.allWpTestimonial.edges.map((testimonials, index) => {
          let { review, reviewerName, reviewerWorkplace } =
            testimonials.node.testimonials
          return (
            <SwiperSlide key={index} >
              <motion.div className="review-content" variants={progressFadeEffect} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
                <figure>
                  <img
                    src={testimonials.node.featuredImage.node.sourceUrl}
                    alt=""
                  />
                </figure>
                <h6 className="background-text">{reviewerName}</h6>
                <p>{reviewerWorkplace}</p>
                <p className="review">{review}</p>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <AnimateSectionElementBottom />
    </TestimonialsSec>
  )
}
const TestimonialsSec = styled.div`
  .swiper {
    padding-bottom: 5.5em;
    .swiper-pagination-bullet {
      width: 2.5em;
      height: 0.5em;
      border-radius: 0;
      background-color: #8c8ca5;
    }
    .swiper-pagination-bullet-active {
      background-image: linear-gradient(to left bottom,#6f1e97,#6431a6,#5440b4,#3d4dc1,#0e59cc);
    }
  }
  .review-content {
    text-align: center;
    margin-top: 8em;
    background-color: #111111;
    padding: 6em 6em 3em;
    position: relative;

    figure {
      position: absolute;
      top: -4.3em;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 8em;
        height: 8em;
        border-radius: 50%;
      }
    }
    h6 {
      color: #0E59CC;
      
    }
    p {
      font-size: 0.9em;
      &.review {
        margin-top: 1em;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 1em;
          height: 1em;
          top: -1em;
          background: url(${quoteStart}) no-repeat;
          left: -1em;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1em;
          height: 1em;
          bottom: -1em;
          background: url(${quoteEnd}) no-repeat;
          right: -1em;
        }
      }
    }
  }
`
export default Testimonials
