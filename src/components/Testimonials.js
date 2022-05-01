import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import "swiper/css"
import "swiper/css/pagination"
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
  return (
    <TestimonialsSec>
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
          console.log(testimonials.node)
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
    padding: 6em 2em 2em;
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
  }
`
export default Testimonials
