import React from 'react'
import { PortfolioList } from 'Components'
import { Heading, Strata, Wrapper } from 'Components'
import styles from './styles.css'

const Portfolio = ({ portfolioList }) => (
  <Strata id='portfolio' className={styles.root}>
    <Wrapper className='u-rhythm--xl'>
      <div className={styles.header}>
        <Heading level='h2'>Portfolio</Heading>
        <p>A sampling of my contributions as a web developer and designer</p>
      </div>

      <PortfolioList portfolioList={portfolioList} />
    </Wrapper>
  </Strata>
)

export default Portfolio
