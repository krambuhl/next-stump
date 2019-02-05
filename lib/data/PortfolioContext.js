import React from 'react'

const PortfolioContext = React.createContext({})

export default PortfolioContext

export const withContext = Component => props => (
  <PortfolioContext.Consumer>
    { (portfolioData) => (
      <Component {...{
        portfolioData,
        ...props
      }} />
    ) }
  </PortfolioContext.Consumer>
)

