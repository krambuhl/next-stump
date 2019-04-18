import React from 'react'
import Head from 'next/head'
import {
  PageLayout,
  Resume
} from 'Components'

const IndexPage = ({ resumeData, currentRoute }) => (
  <PageLayout currentRoute={currentRoute}>
    <Head>
      <title>Resume - Stumptown Bear</title>
    </Head>

    <Resume {...resumeData} />
  </PageLayout>
)

IndexPage.getInitialProps = ({ query }) => {
  const resumeData = require('../content/resume')
  return { query, resumeData }
}

export default IndexPage
