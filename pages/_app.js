import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import withGA from 'next-ga';
import NProgress from 'nprogress'
import 'Styles/styles.css'

// setup progress bars
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class AppWrapper extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }
  }

  render () {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <Head>
          <title>Stumptown Bear</title>
        </Head>

        <Component
          {...pageProps}
          currentRoute={router.asPath}
        />
      </Container>
    )
  }
}

export default withGA('UA-53544312-1', Router)(AppWrapper)
