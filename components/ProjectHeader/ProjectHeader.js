import React from 'react'
import { Button, Heading } from 'Tags'

const ProjectHeader = ({ project }) => {
  return (
    <div className='ProjectHeader Rhythm--default'>
      <Heading level='h1'>{project.title}</Heading>
      <p>{project.year} with <a href={project.companyHref} target="_blank">{project.company}</a></p>
      { project.projectHref &&
        <p className='ProjectHeader__button'>
          <Button href={project.projectHref} target="_blank">Visit Project</Button>
        </p>
      }
    </div>
  )
}

export default ProjectHeader
