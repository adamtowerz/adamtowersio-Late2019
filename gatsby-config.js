require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Adam Towers`,
    description: `Adam Towers' personal website and portfolio`,
    author: `Adam Towers`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `appga5u4QI2sqDov4`,
            tableName: `Work Experience`,
            tableView: `GatsbyWorkExp`,
            mapping: { Image: `fileNode` },
          },
          {
            baseId: `appga5u4QI2sqDov4`,
            tableName: `Projects`,
            tableView: `GatsbyProjects`,
            mapping: { Image: `fileNode` },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
