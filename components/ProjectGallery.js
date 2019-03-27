import React from 'react'
import { SimpleImg } from 'react-simple-img';
import * as Breakpoints from 'Vars/breakpoints'

const ProjectGallery = ({ project }) => {
  return (
    <div className='root'>
      {project.projectImages.map(({ alt, image }) => (
        <div key={alt}>
          <SimpleImg
            className='image'
            src={image.src}
            srcSet={image.srcSet}
            placeholder={image.placeholder}
            applyAspectRatio
            height={image.height}
            width={image.width}
            alt={alt}
            animationDuration={1}
          />

          <p className="label">{alt}</p>
        </div>
      ))}

      <style jsx>{`
        .root {
          margin-top: 4rem;

          & > * + * {
            margin-top: 2rem;

            @media (${Breakpoints.medium}) {
              margin-top: 4rem;
            }
          }
        }

        .image {
          overflow: hidden;
          border-radius: 4px;

          & > *:last-child {
            filter: blur(20px);
          }
        }

        .label {
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}

export default ProjectGallery
