/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Writing | Luke Moderwell`,
    description: `Just a place for my thoughts.`,
    author: `Luke Moderwell`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-B8MQPWFL0R",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writing`,
        path: `${__dirname}/writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `build-journal`,
        path: `${__dirname}/build-journal`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-plugin-netlify-cms-paths`],
      },
    },
  ],
};
