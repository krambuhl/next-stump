import React from 'react'
import Head from 'next/head'
import {
  Biography,
  Contact,
  PageLayout,
  Portfolio
} from 'Components'

class Post extends React.Component {
  static async getInitialProps ({ query }) {
    const { thumbnails: portfolioList } = require('../content/portfolio-dist/thumbnails')
    return { query, portfolioList }
  }

  render () {
    return (
      <PageLayout>
        <Head>
          <title>Stumptown Bear</title>
        </Head>

        <Biography />
        <Portfolio portfolioList={this.props.portfolioList} />
        <Contact />
      </PageLayout>
    )
  }
}

export default Post
