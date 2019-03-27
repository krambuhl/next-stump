import React from 'react'
import { PortfolioList } from 'Components'
import { Heading, Strata, Wrapper } from 'Components'

const Portfolio = ({ portfolioList }) => (
  <Strata id='portfolio' className='Portfolio__root'>
    <Wrapper className='u-rhythm--xl'>
      <div className='header'>
        <Heading level='h2'>Portfolio</Heading>
        <p>A sampling of my contributions as a web developer and designer</p>
      </div>

      <PortfolioList portfolioList={portfolioList} />
    </Wrapper>

    <style jsx>{`
      :global(.Portfolio__root) {
        border-top: var(--section-border) solid var(--color-offtan);
        align-items: center;
      }

      .header {
        margin-bottom: 3em;
      }
    `}</style>
  </Strata>
)

export default Portfolio
