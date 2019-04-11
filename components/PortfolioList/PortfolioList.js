import React from 'react'
import Link from 'next/link'
import { Heading, PortfolioItem } from 'Components'
import styles from './styles.css'

const PortfolioList = ({ portfolioList }) => (
  <div className={styles.root}>
    { portfolioList.map((data) => <PortfolioItem key={data.slug} {...data} />) }
  </div>
)

export default PortfolioList
