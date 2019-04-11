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

const context = require.context('../content/portfolio-dist', false, /\-details\.js/)

const PortfolioPage = ({ activeProject }) => {
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

PortfolioPage.getInitialProps = ({ query }) => {
  if (query.slug) {
    const activeProject = context(`./${query.slug}-details.js`)
    return { activeProject }
  }

  return { }
}

export default PortfolioPage
