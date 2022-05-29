import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import rightArrow from "../images/right-arrows.png"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css/navigation"
import { motion } from "framer-motion"
import { progressFadeEffect } from "./allAnimations"

const BlogSlider = () => {
  const blogData = useStaticQuery(graphql`
    query blogSliderQuery {
      allWpPost {
        edges {
          node {
            excerpt
            title
            slug
            date(formatString: "DD/MM/YYYY")
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)
  let allmonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  let postedMonth
  let postedDate
  let postedYear
  return (
    <BlogSliderSec>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
      >
        {blogData.allWpPost.edges.map((blogDatas, index) => {
          let { date, title, slug } = blogDatas.node

          let formattedDate = date.split("/")
          postedDate = formattedDate[0]
          postedMonth = formattedDate[1]
          postedYear = formattedDate[2]

          return (
            <SwiperSlide key={index}>
              <motion.div className="blog-item" key={index} variants={progressFadeEffect} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
                <figure>
                  <img
                    src={blogDatas.node.featuredImage.node.sourceUrl}
                    alt=""
                  />
                </figure>
                <div className="blog-overview">
                  <p>
                    {`${postedDate}th ${allmonths[parseInt(postedMonth) - 1]
                      }, ${postedYear}`}
                  </p>
                  <h6>{title}</h6>
                  <Link to={`/blog/${slug}`}>Learn More </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </BlogSliderSec>
  )
}
const BlogSliderSec = styled.div`
  margin-top: 3em;
  .blog-item {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .blog-overview {
    background-color: #111;
    padding: 1em;
    flex-grow: 1;
    p {
      font-size: 0.8em;
      margin-bottom: 0.8em;
    }
    h6 {
      font-size: 1.1em;
      font-weight: lighter;
      margin-bottom: 1.3em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1em;
        height: 1em;
        background: url(${rightArrow}) no-repeat;
        right: -1.4em;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .swiper-slide {
    height: auto;
  }
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after,
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    font-size: 0.9em;
    color: #0E59CC;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background: #111;
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
`
export default BlogSlider
