import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Stumptown Bear</title>
          <script src="https://use.typekit.net/ccx0qyi.js"></script>
          <script>{`
            try{Typekit.load({ async: true })}catch(e){}
          `}</script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
