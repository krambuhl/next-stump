import React from 'react'
import Head from 'next/head'
import {
  Biography,
  Contact,
  PageLayout,
  PageWrapper,
  Portfolio
} from 'Components'

class Post extends React.Component {
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

export default PageWrapper(Post)
