import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Wrapper, Topcontents } from "../styles/baseStyles"
import { Link } from "gatsby"
import rightArrow from "../images/right-arrows.png"
const Blog = () => {
  const blogData = useStaticQuery(graphql`
    query blogQuery {
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
    <BlogSec>
      <Wrapper>
        <Topcontents>
          <h2></h2>
          <p></p>
        </Topcontents>
        <div className="blog-wrap">
          {blogData.allWpPost.edges.map((blogDatas, index) => {
            let { date, title, slug } = blogDatas.node

            let formattedDate = date.split("/")
            postedDate = formattedDate[0]
            postedMonth = formattedDate[1]
            postedYear = formattedDate[2]

            console.log()
            return (
              <div className="blog-item" key={index}>
                <figure>
                  <img
                    src={blogDatas.node.featuredImage.node.sourceUrl}
                    alt=""
                  />
                </figure>
                <div className="blog-overview">
                  <p>
                    {`${postedDate}th ${
                      allmonths[parseInt(postedMonth) - 1]
                    }, ${postedYear}`}
                  </p>
                  <h6>{title}</h6>
                  <Link to={`/blog/${slug}`}>Learn More </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </BlogSec>
  )
}
const BlogSec = styled.div`
  padding: 5em 0;
  .blog-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(94% / 3));
    grid-gap: 2em;
  }
  .blog-item {
    display: flex;
    flex-direction: column;
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
    }
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1em;
        height: 1em;
        background: url(${rightArrow}) no-repeat;
        right:-1.4em;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`
export default Blog
