import Head from 'next/head'
import site from '../data/siteconfig.json'

function Metatags({ title, description }) {
  const pageTitle = title === site.title ? title : `${title} | ${site.title}`

  return (
    <Head>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />
      <meta content={pageTitle} name="twitter:title" />

      {/* Description */}
      <meta content={description} name="description" />
      <meta content={description} name="twitter:description" />
      <meta content={description} property="og:description" />

      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />

      <meta content="en" property="og:locale" />

      {/* Favicon */}
      <link href="/favicon.ico" rel="icon" type="image/svg+xml" />
      <link color="#888" href="/images/favicon.svg" rel="mask-icon"></link>
    </Head>
  )
}
export default Metatags
