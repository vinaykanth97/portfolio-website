import React, { useState } from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import GlobalStyle from "../styles/globalStyles"
import { Wrapper } from "../styles/baseStyles"
import styled from "styled-components"
import calendarIcon from "../images/calendar.png"
import BlogSlider from "../components/BlogSlider"
import BackHomeIcon from "../images/back-home.png"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
export default function BlogPost({ data }) {
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
  let title = data.allWpPost.edges[0].node.slug
  const disqusConfig = {
    shortname: "portfolio",
    config: {
      identifier: data.allWpPost.edges[0].node.slug,
      title: title,
      language: "en",
    },
  }

  return (
    <BlogTemplate >
      <GlobalStyle />
      <div className="back-to-home">
        <Wrapper>
          <Link to="/">
            <img src={BackHomeIcon} alt="" />
            <span>Back to Home</span>
          </Link>
        </Wrapper>
      </div>
      <Wrapper>
        {data.allWpPost.edges.map((blogs, index) => {
          let formattedDate = blogs.node.date.split("/")
          postedDate = formattedDate[0]
          postedMonth = formattedDate[1]
          postedYear = formattedDate[2]

          return (
            <div key={index}>
              <div className="top-contents">
                <h1>{blogs.node.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: blogs.node.excerpt }}
                ></div>
              </div>
              <figure className="blog-img">
                <img src={blogs.node.featuredImage.node.sourceUrl} alt="" />
              </figure>
              <div className="blog-explanation">
                <div className="d-flex blog-essential">
                  <div className="d-flex author-detail align-center">
                    <figure>
                      <img src={blogs.node.author.node.avatar.url} alt="" />
                    </figure>
                    <p>{`${blogs.node.author.node.firstName} ${blogs.node.author.node.lastName}`}</p>
                  </div>
                  <div className="d-flex posted-on align-center">
                    <figure>
                      <img src={calendarIcon} alt="" />
                    </figure>
                    <p>
                      {`${postedDate}th ${allmonths[parseInt(postedMonth) - 1]
                        }, ${postedYear}`}
                    </p>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogs.node.blogutils.blogField,
                  }}
                  className="blog-para"
                ></div>
              </div>

              <DiscussionEmbed {...disqusConfig} />
              <div className="related-posts">
                <h2>Related Posts</h2>
                <BlogSlider />
              </div>
            </div>
          )
        })}
      </Wrapper>
    </BlogTemplate>

  )
}
export const blogDetailQuery = graphql`
  query blogDataQuery($databaseId: Int) {
    allWpPost(filter: { databaseId: { eq: $databaseId } }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "DD/MM/YYYY")
          blogutils {
            blogField
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              avatar {
                url
              }
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`
const BlogTemplate = styled(motion.div)`
  .top-contents {
    padding: 5em 0 3em;
    h1 {
      margin-bottom: 0.1em;
    }
  }
  .blog-img {
    img {
      width: 100%;
    }
  }
  .blog {
    &-explanation {
      padding: 5em 0 3em;
    }
    &-essential {
      padding: 0 0 2em;
      .author-detail {
        margin: 0 2em 0 0;
        figure {
          margin-right: 0.5em;
          img {
            border-radius: 50%;
            max-width: 2em;
          }
        }
      }
      .posted-on {
        figure {
          margin-right: 0.5em;
        }
      }
    }
    &-para {
      p {
        margin-bottom: 1em;
      }
    }
  }
  .related-posts {
    padding: 5em 0;
    h2 {
      margin-bottom: 1em;
    }
  }
  .back-to-home {
    padding: 2em 0;
    position: sticky;
    top: 0;
    z-index: 22;
    background: #000;
    a {
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 0.5em;
    }
  }
`
