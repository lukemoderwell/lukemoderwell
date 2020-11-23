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
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
        ],
      },
    },
  ],
}
