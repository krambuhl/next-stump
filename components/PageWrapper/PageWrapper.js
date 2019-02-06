import React from 'react'
import getPortfolioData from 'Lib/data/getPortfolioData'

const PageWrapper = Component => (
  class extends React.Component {
    static async getInitialProps ({ query }) {
      const portfolioList = await getPortfolioData()
      return { query, portfolioList }
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }
)

export default PageWrapper
