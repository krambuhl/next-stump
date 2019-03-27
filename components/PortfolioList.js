import React from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-component';
import { SimpleImg } from 'react-simple-img';
import { Heading } from 'Components'
import * as Breakpoints from 'Vars/breakpoints'

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
            <Link
              key={slug}
              href={`/portfolio?slug=${slug}`}
              as={`/portfolio/${slug}`}
            ><a className="grid">
              <div className='item'>
                <div className='header'>
                  <Heading level='h3' className='title'>{title}</Heading>
                  <div>{year} / {company}</div>
                </div>

                <SimpleImg
                  className='image'
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

      <style jsx>{`
        .ProjectList {
          display: flex;
          flex-flow: row wrap;
        }

        .grid {
          position: relative;
          width: 100%;
          border-radius: 6px;

          @media (${Breakpoints.mediumSmall}) {
            width: 50%;
          }

          @media (${Breakpoints.mediumLarge}) {
            width: 33.33%;
          }

          &:hover,
          &:focus {
            .header,
            &::after {
              opacity: 1;
            }
          }

          &:focus {
            outline: none;

            &::before {
              opacity: 1;
            }
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #0004;
            z-index: 0;
            border-radius: 10px;
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          &::before {
            content: '';
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            right: 0.5rem;
            bottom: 0.5rem;
            box-shadow: var(--color-teal) 0 0 0 3px;
            z-index: 4;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }
        }

        .item {
          width: 100%;
        }

        .header {
          position: absolute;
          top: 0;
          width: 100%;
          padding: 1.5em 1.5em 6em;
          z-index: 2;
          border-radius: 10px;
          background-color: transparent;
          background-image: linear-gradient(to bottom, #000f 20%, #0000);
          color: white;
          font-size: 1rem;
          line-height: 1em;
          text-align: left;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .title {
          margin-bottom: 0.25em;
        }

        .image {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 4px;
          margin: 0.5rem 0.5rem;
          box-shadow: #0002 0 1px 5px;

          & > *:last-child {
            filter: blur(20px);
          }
        }
      `}</style>
    </Masonry>
  )
}

export default PortfolioList
