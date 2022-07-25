const path = require(`path`)
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query {
      wp {
        posts {
          edges {
            node {
              slug
              databaseId
            }
          }
        }
      }
    }
  `)
  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.wp.posts
}

exports.createPages = async gatsbyUtilities => {
  const posts = await getPosts(gatsbyUtilities)
  const blogPostTemplate = path.resolve(`src/templates/blog-archive.js`)
  if (!posts.length) {
    return
  }
  posts.forEach(postSlugs => {
    gatsbyUtilities.actions.createPage({
      path: `/blog/${postSlugs.node.slug}`,
      component: blogPostTemplate,
      context: {
        databaseId: postSlugs.node.databaseId,
        slug: postSlugs.node.slug,
      },
    })
  })
}
