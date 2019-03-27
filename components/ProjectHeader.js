import React from 'react'
import { Button, Heading } from 'Components'

const ProjectHeader = ({ project }) => {
  return (
    <div className='root u-rhythm'>
      <Heading level='h1'>{project.title}</Heading>
      <p>{project.year} with <a href={project.companyHref} target="_blank">{project.company}</a></p>
      { project.projectHref &&
        <p className='button'>
          <Button href={project.projectHref} target="_blank">Visit Project</Button>
        </p>
      }

      <style jsx>{`
        .root {
          margin-bottom: 3em;
        }

        .button {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ProjectHeader
