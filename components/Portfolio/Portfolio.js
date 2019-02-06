import React from 'react'
import { PortfolioList } from 'Components'
import { Heading, Strata, Wrapper } from 'Tags'

const Portfolio = ({ portfolioList }) => (
  <Strata id='portfolio' className='Portfolio'>
    <Wrapper className='Rhythm--large'>
      <Heading level='h2'>Portfolio</Heading>
      <PortfolioList portfolioList={portfolioList} />
    </Wrapper>
  </Strata>
)

export default Portfolio
