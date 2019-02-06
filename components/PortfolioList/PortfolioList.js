import React from 'react'
import Link from 'next/link'

const PortfolioList = ({ portfolioList }) => {
  return (
    <div className='Rhythm'>
      {
        portfolioList.map(project => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`}><a>
            <h2>{project.title}</h2>
          </a></Link>
        ))
      }
    </div>
  )
}

export default PortfolioList
