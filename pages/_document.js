import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="The home of Evan Krambuhl on the internet. He's very good" />
          <meta name="author" content="Evan Krambuhl" />
          <meta name="apple-mobile-web-app-title" content="Stumptown Bear" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Stumptown Bear" />
          <meta name="twitter:description" content="The home of Evan Krambuhl on the internet. He's very good" />
          <meta name="twitter:site" content="@eeveekreevee" />
          <meta name="twitter:creator" content="@eeveekreevee" />
          <meta name="twitter:image" content="https://stumptownbear.com/static/social-image-twitter.jpg" />

          <meta property="og:url" content="https://stumptownbear.com" />
          <meta property="og:title" content="Stumptown Bear" />
          <meta property="og:description" content="The home of Evan Krambuhl on the internet. He's very good" />
          <meta property="og:image" content="https://stumptownbear.com/static/social-image-og.jpg" />

          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/16x16.png" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />

          <script src="https://use.typekit.net/ccx0qyi.js"></script>
          <script
            dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
