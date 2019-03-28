import React from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-component';
import { SimpleImg } from 'react-simple-img';
import { Heading } from 'Components'
import styles from './styles.css'

const PortfolioList = ({ portfolioList }) => {
  return (
    <Masonry
      className={styles.root}
      options={{
        transitionDuration: 0
      }}
    >
      {
        portfolioList.map(({ slug, title, year, company, thumbnail }) => {
          return (
            <Link
              key={slug}
              href={`/portfolio?slug=${slug}`}
              as={`/portfolio/${slug}`}
            ><a className={styles.grid}>
              <div className={styles.item}>
                <div className={styles.header}>
                  <Heading level='h3' className={styles.title}>{title}</Heading>
                  <div>{year} / {company}</div>
                </div>

                <SimpleImg
                  className={styles.image}
                  src={thumbnail.src}
                  srcSet={thumbnail.srcSet}
                  placeholder={thumbnail.placeholder}
                  applyAspectRatio
                  height={thumbnail.height}
                  width={thumbnail.width}
                  alt={title}
                  animationDuration={1}
                />
              </div>
            </a></Link>
          )
        })
      }
    </Masonry>
  )
}

export default PortfolioList
