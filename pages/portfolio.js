import React from 'react'
import Head from 'next/head'
import {
  ErrorPage,
  PageLayout,
  ProjectGallery,
  ProjectHeader
} from 'Components'
import { Strata, Wrapper } from 'Tags'

const context = require.context('../lib/portfolio-dist', false, /\-details\.js/)

class Post extends React.Component {
  static async getInitialProps ({ query }) {
    const activeProject = context(`./${query.slug}-details.js`)
    return { activeProject }
  }

  render () {
    const { activeProject } = this.props

    if (!activeProject) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <PageLayout dark>
        <Head>
          <title>{activeProject.title} - Stumptown Bear</title>
        </Head>

        <Strata>
          <Wrapper>
            <ProjectHeader project={activeProject} />
            <ProjectGallery project={activeProject} />
          </Wrapper>
        </Strata>
      </PageLayout>
    )
  }
}

export default Post
