import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  const testimonialsData = useStaticQuery(graphql`
    query testimonialQuery {
      allWpTestimonial {
        edges {
          node {
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
  return (
    <>
      <h1>Testimonials</h1>
    </>
  )
}

export default Testimonials
