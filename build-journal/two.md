---
path: /journal/two-google-analytics
date: 2020-11-29T20:30:01.978Z
title: "Day 2: Plugins"
---

One thing I am learning about [Gatsby](https://www.gatsbyjs.com/) is that there seems to be a strong plugin ecosystem. Most of them seem to be a bit magical which I guess is a blessing/curse of Gatsby in general. Here are few plugins I've setup in `gatsby-config.js`:
 - `gatsby-plugin-sass`: allows me to write styles in the `.scss` format
 - `gatsby-plugin-netlify-cms`: my current CMS. A few gripes but so far so good.
 - `gatsby-plugin-netlify-cms-paths`: helper that makes sure paths work properly on blog routes.
 - `gatsby-source-filesystem`: 🔮 magical plugin that exposes certain file types in the statically rendered `public` dir. Using this for images and markdown-based blog posts.
 - `gatsby-transformer-remark`: processes markdown and turns it into `HTML`
 - `gatsby-plugin-google-analytics`: standard-issue GA tracking

While I am enjoying the ease of plugins, it makes me wonder if this list will grow unruly and/or have some plugins lose support over time.
