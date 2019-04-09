import React from 'react'
import classnames from 'classnames'
import { Button, Heading } from 'Components'
import styles from './styles.css'

const ProjectHeader = ({ project }) => {
  return (
    <div className={classnames(styles.root, 'u-rhythm')}>
      <Heading level='h1'>{project.title}</Heading>
      <p>{project.year} with <a href={project.companyHref} target="_blank" rel="noreferrer">{project.company}</a></p>
      { project.projectHref &&
        <p className={styles.button}>
          <Button href={project.projectHref} target="_blank" rel="noreferrer">Visit Project</Button>
        </p>
      }
    </div>
  )
}

export default ProjectHeader
