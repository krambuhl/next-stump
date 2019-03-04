import React from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-component';
import { SimpleImg } from 'react-simple-img';
import { Heading } from 'Tags'

const PortfolioList = ({ portfolioList }) => {
  return (
    <Masonry
      className='ProjectList'
      options={{
        transitionDuration: 0
      }}
    >
      {
        portfolioList.map(({ slug, title, year, company, thumbnail }) => {
          return (
            <div key={slug} className="ProjectList__grid">
              <div className='ProjectList__item'>
                <Link href={`/portfolio/${slug}`}><a>
                  <div className='ProjectList__header'>
                    <Heading level='h3' className='ProjectList__title'>{title}</Heading>
                    <div>{year} / {company}</div>
                  </div>

                  <SimpleImg
                    className='ProjectList__image'
                    src={thumbnail.src}
                    srcSet={thumbnail.srcSet}
                    placeholder={thumbnail.placeholder}
                    applyAspectRatio
                    height={thumbnail.height}
                    width={thumbnail.width}
                    alt={title}
                    animationDuration={1}
                  />
                </a></Link>
              </div>
            </div>
          )
        })
      }
    </Masonry>
  )
}

export default PortfolioList
