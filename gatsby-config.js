module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "wp",
        // // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wp",
        // Url to query from
        url: "https://dbycbroadway.com/vnport/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   /**
    //    * First up is the WordPress source plugin that connects Gatsby
    //    * to your WordPress site.
    //    *
    //    * visit the plugin docs to learn more
    //    * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
    //    *
    //    */
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // the only required plugin option for WordPress is the GraphQL url.
    //     url: process.env.WPGRAPHQL_URL || `http://localhost/portfolio/graphql`,
    //     develop: {
    //       //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
    //       hardCacheMediaFiles: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
