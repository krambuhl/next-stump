import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
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
