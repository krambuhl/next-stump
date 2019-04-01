import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import withGA from 'next-ga';
import 'Styles/styles.css'

class AppWrapper extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Stumptown Bear</title>
        </Head>

        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withGA('UA-53544312-1', Router)(AppWrapper)
