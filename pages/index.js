import React from 'react'
import Head from 'next/head'
import {
  Biography,
  PageLayout,
  PageWrapper,
  ProjectList
} from 'Components'

class Post extends React.Component {
  render () {
    return (
      <PageLayout>
        <Head>
          <title>Stumptown Bear</title>
        </Head>
        <Biography />
        <div id="portfolio">
          <ProjectList projectList={this.props.portfolio} />
        </div>
      </PageLayout>
    )
  }
}

export default PageWrapper(Post)
