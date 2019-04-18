import React from 'react'
import Head from 'next/head'
import {
  Biography,
  Contact,
  PageLayout,
  Portfolio
} from 'Components'

const IndexPage = ({ portfolioList, currentRoute }) => (
  <PageLayout dark={false} currentRoute={currentRoute}>
    <Head>
      <title>Stumptown Bear</title>
    </Head>

    <Biography />
    <Portfolio portfolioList={portfolioList} />
    <Contact />
  </PageLayout>
)

IndexPage.getInitialProps = ({ query }) => {
  const { thumbnails: portfolioList } = require('../content/portfolio-dist/thumbnails')
  return { query, portfolioList }
}

export default IndexPage
