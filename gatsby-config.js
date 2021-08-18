/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Luke Moderwell`,
    description: `Dad, Designer, Friend.`,
    author: `Luke Moderwell`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // your google analytics tracking id
        trackingIds: [
          "UA-38487143-1",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT-NQNKRDQ",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luke Moderwell',
        short_name: 'lukemoderwell.com',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#da532c',
        display: 'minimal-ui',
        icon: 'static/favicon-32x32.png'
      }
    }
  ],
};
