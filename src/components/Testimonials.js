import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import quoteStart from "../images/quote-start.png"
import quoteEnd from "../images/quote-end.png"
import "swiper/css"
import "swiper/css/pagination"
import elementContext from "./ElementContext"
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
  console.log("effect Testimonials")
  return (
    <TestimonialsSec
      className="common-sec"
      id="testimonials"
      ref={testimonials.reference}
    >
      <Wrapper>
        <Topcontents>
          <h2>{testimonialsTitle}</h2>
          <p>{testimonialsDescription}</p>
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
            <SwiperSlide key={index}>
              <div className="review-content">
                <figure>
                  <img
                    src={testimonials.node.featuredImage.node.sourceUrl}
                    alt=""
                  />
                </figure>
                <h6>{reviewerName}</h6>
                <p>{reviewerWorkplace}</p>
                <p className="review">{review}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </TestimonialsSec>
  )
}
const TestimonialsSec = styled.div`
  padding: 5em 0;
  .swiper {
    padding-bottom: 5.5em;
    .swiper-pagination-bullet {
      width: 2.5em;
      height: 0.5em;
      border-radius: 0.3em;
      background-color: #8c8ca5;
    }
    .swiper-pagination-bullet-active {
      background-color: #ff4900;
    }
  }
  .review-content {
    text-align: center;
    margin-top: 8em;
    background-color: #111111;
    border-radius: 0.3em;
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
      color: #ff4900;
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
