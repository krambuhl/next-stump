import React from 'react'
import Head from 'next/head'
import {
  ErrorPage,
  PageLayout,
  PageWrapper
} from 'Components'
import { Wrapper } from 'Tags'

class Post extends React.Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    const { slug } = this.props.query
    const activeProject = this.props.portfolio.find(res => res.slug === slug)

    if (!activeProject) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <PageLayout dark>
        <Head>
          <title>Stumptown Bear - {activeProject.title}</title>
        </Head>

        <Wrapper className='Rhythm--large'>
          <h1>{activeProject.title}</h1>

          {activeProject.projectImages.map(img => (
            <p>
              <img
                src={img.src}
                alt={img.alt}
                style={{ maxWidth: '100%' }}
              />
            </p>
          ))}
        </Wrapper>
      </PageLayout>
    )
  }
}

export default PageWrapper(Post)
