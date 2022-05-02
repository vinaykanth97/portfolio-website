import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import GlobalStyle from "../styles/globalStyles"
export default function BlogPost({ data }) {
  let title = data.allWpPost.edges[0].node.slug
  const disqusConfig = {
    shortname: "portfolio",
    config: {
      identifier: data.allWpPost.edges[0].node.slug,
      title: title,
      language: "en",
    },
  }
  console.log(disqusConfig)
  return (
    <>
      <GlobalStyle />
      {data.allWpPost.edges.map(blogs => {
        console.log()
        return (
          <>
            <h2>{blogs.node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blogs.node.excerpt }}></div>

            <DiscussionEmbed {...disqusConfig} />
          </>
        )
      })}
    </>
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
        }
      }
    }
  }
`
