// import Head from 'next/head'
import site from '../data/siteconfig.json'

function Metatags({ title, description }) {
  const pageTitle = title === site.title ? title : `${title} | ${site.title}`

  return (
    <head>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" key="title" />
      <meta content={pageTitle} name="twitter:title" key="title" />

      {/* Description */}
      <meta content={description} name="description" key="description" />
      <meta
        content={description}
        name="twitter:description"
        key="description"
      />
      <meta content={description} property="og:description" key="description" />

      <meta content="en" property="og:locale" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Favicon */}
      <link href="/favicon.ico" rel="icon" type="image/svg+xml" />
    </head>
  )
}
export default Metatags
