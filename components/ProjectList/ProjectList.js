import React from 'react'
import Link from 'next/link'
import { Heading, Wrapper } from 'Tags'

const ProjectList = ({ projectList }) => {
  return (
    <Wrapper className='Rhythm--large'>
      <Heading level='h2'>Portfolio</Heading>
      {
        projectList.map(project => (
          <Link href={`/project/${project.slug}`}><a>
            <h2>{project.title}</h2>
          </a></Link>
        ))
      }
    </Wrapper>
  )
}

export default ProjectList
