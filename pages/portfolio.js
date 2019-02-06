import React from 'react'
import Head from 'next/head'
import {
  ErrorPage,
  PageLayout,
  PageWrapper
} from 'Components'
import { Heading, Strata, Wrapper } from 'Tags'

class Post extends React.Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    const { slug } = this.props.query
    const activeProject = this.props.portfolioList.find(res => res.slug === slug)

    if (!activeProject) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <PageLayout dark>
        <Head>
          <title>{activeProject.title} - Stumptown Bear</title>
        </Head>

        <Strata>
          <Wrapper className='Rhythm--large'>
            <Heading level='h1'>{activeProject.title}</Heading>

            {activeProject.projectImages.map(img => (
              <p key={img.alt} >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ maxWidth: '100%' }}
                />
              </p>
            ))}
          </Wrapper>
        </Strata>
      </PageLayout>
    )
  }
}

export default PageWrapper(Post)
