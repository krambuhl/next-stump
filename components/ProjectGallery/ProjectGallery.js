import React from 'react'
import { SimpleImg } from 'react-simple-img';
import styles from './styles.css'

const ProjectGallery = ({ project }) => {
  return (
    <div className={styles.root}>
      {project.projectImages.map(({ alt, image }) => (
        <div key={alt}>
          <SimpleImg
            className={styles.image}
            src={image.src}
            srcSet={image.srcSet}
            placeholder={image.placeholder}
            applyAspectRatio
            height={image.height}
            width={image.width}
            alt={alt}
            animationDuration={1}
          />

          <p className={styles.label}>{alt}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectGallery
