import React from 'react'
import getPortfolioData from 'Lib/data/getPortfolioData'

const PageWrapper = Component => (
  class extends React.Component {
    static async getInitialProps ({ query }) {
      const portfolio = await getPortfolioData()
      return { query, portfolio }
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }
)

export default PageWrapper
