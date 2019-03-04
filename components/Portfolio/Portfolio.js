import React from 'react'
import { PortfolioList } from 'Components'
import { Heading, Strata, Wrapper } from 'Tags'

const Portfolio = ({ portfolioList }) => (
  <Strata id='portfolio' className='Portfolio'>
    <Wrapper className='Rhythm--ex-large'>
      <div className='Rhythm--small'>
        <Heading level='h2'>Portfolio</Heading>
        <p>A sampling of my contributions as a web developer and designer</p>
      </div>

      <PortfolioList portfolioList={portfolioList} />
    </Wrapper>
  </Strata>
)

export default Portfolio
