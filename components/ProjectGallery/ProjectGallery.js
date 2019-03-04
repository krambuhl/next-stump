import React from 'react'
import { SimpleImg } from 'react-simple-img';

const ProjectGallery = ({ project }) => {
  return (
    <div className='ProjectGallery'>
      {project.projectImages.map(({ alt, image }) => (
        <div key={alt}>
          <SimpleImg
            className='ProjectGallery__image'
            src={image.src}
            srcSet={image.srcSet}
            placeholder={image.placeholder}
            applyAspectRatio
            height={image.height}
            width={image.width}
            alt={alt}
            animationDuration={1}
          />

          <p class="ProjectGallery__label">{alt}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectGallery
