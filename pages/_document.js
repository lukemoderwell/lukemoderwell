import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    // Hack to prevent unstyled flash with styled-components.
    // From https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Luke Moderwell</title>
          <link rel="author" type="text/plain" href="/humans.txt" />
          <meta property="og:site_name" content="The Personal Site of Luke Moderwell" />
          <meta property="og:title" content="Luke Moderwell" />
          <meta property="og:type" content="profile" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="https://lukemoderwell.com" />
          <meta property="og:url" content="http ://lukemoderwell.com" />
          <meta property="og:image" content="http://lukemoderwell.com/static/images/portrait.jpg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="profile:first_name" content="Luke" />
          <meta property="profile:last_name" content="Moderwell" />
          <meta property="profile:gender" content="male" />
          <meta property="profile:username" content="modscwod" />
          <link rel="stylesheet" type="text/css" href="/static/style.css" />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
