import React from 'react'
import Head from 'next/head'
import {
  ErrorPage,
  PageLayout,
  ProjectGallery,
  ProjectHeader,
  Strata,
  Wrapper
} from 'Components'

const context = require.context('../lib/portfolio-dist', false, /\-details\.js/)

class Post extends React.Component {
  static async getInitialProps ({ query }) {
    const activeProject = context(`./${query.slug}-details.js`)
    return { activeProject }
  }

  componentDidMount() {
    document.body.classList.add('dark')
  }

  componentWillUnmount () {
    document.body.classList.remove('dark')
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
