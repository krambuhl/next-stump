import React from 'react'
import styles from './styles.css'

const ProjectGallery = ({ project }) => {
  return (
    <div className={styles.root}>
      {project.projectImages.map(({ alt, image }) => (
        <div key={alt}>
          <img
            className={styles.image}
            src={image.src}
            srcSet={image.srcSet}
            width="100%"
            style={{ maxWidth: 960 }}
            alt={alt}
          />

          <p className={styles.label}>{alt}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectGallery
