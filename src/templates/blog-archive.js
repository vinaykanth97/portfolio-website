import React from "react"
import { graphql } from "gatsby"
export default function BlogPost({ data }) {
  console.log(data)
  return (
    <>
      {data.allWpPost.edges.map(blogs => {
        return (
          <>
            <h2>{blogs.node.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: blogs.node.excerpt }}></p>
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
