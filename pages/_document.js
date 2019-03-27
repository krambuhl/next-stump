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
