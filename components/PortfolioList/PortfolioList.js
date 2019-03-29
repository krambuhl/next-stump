import React from 'react'
import Link from 'next/link'
import { Heading } from 'Components'
import styles from './styles.css'

const PortfolioList = ({ portfolioList }) => {
  return (
    <div className={styles.root}>
      {
        portfolioList.map(({ slug, title, year, company, thumbnail }) => {
          return (
            <Link
              key={slug}
              href={`/portfolio?slug=${slug}`}
              as={`/portfolio/${slug}`}
            ><a className={styles.item}>
              <div className={styles.header}>
                <Heading level='h3' className={styles.title}>{title}</Heading>
                <div>{year} / {company}</div>
              </div>

              <div className={styles.image}>
                <img
                  src={thumbnail.src}
                  srcSet={thumbnail.srcSet}
                  width="100%"
                  height="100%"
                  alt={title}
                />
              </div>
            </a></Link>
          )
        })
      }
    </div>
  )
}

export default PortfolioList
