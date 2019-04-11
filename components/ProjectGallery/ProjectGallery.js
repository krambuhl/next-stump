import React from 'react'
import styles from './styles.css'

const ProjectGallery = ({ project }) => (
  <div className={styles.root}>
    {project.projectImages.map(({ alt, image }) => (
      <div key={alt} className={styles.container}>
        <div
          className={styles.image}
          style={{ paddingBottom: `${image.height / image.width * 100}%` }}
        >
          <img
            src={image.src}
            srcSet={image.srcSet}
            alt={alt}
          />
        </div>

        <p className={styles.label}>{alt}</p>
      </div>
    ))}
  </div>
)

export default ProjectGallery
