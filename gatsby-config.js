module.exports = {
  siteMetadata: {
    title: `zfc9d3f`,
    description: "zfc9d3f francis chang",
    author: `@zfc9d3f`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Ubuntu Mono"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `zfc9d3f hompeage`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/bar.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
