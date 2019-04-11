import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProjectGallery } from 'Components'
import Padding from 'Decorators/Padding'

const project = JSON.parse(`
  {"slug":"juniper-rap-battle","title":"Juniper Data Center Rap Battle","year":2014,"company":"John McNeil Studio","projectImages":[{"alt":"Landing page","image":{"srcSet":"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg 720w,/static/portfolio/website-1421-4033f3c369f0920858be3f82a4438a12.jpg 1421w","images":[{"path":"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg","width":720,"height":1020},{"path":"/static/portfolio/website-1421-4033f3c369f0920858be3f82a4438a12.jpg","width":1421,"height":2013}],"src":"/static/portfolio/website-720-b9c739187dbceb596655919dc43b8eea.jpg","width":720,"height":1020}}]}
`)

storiesOf('ProjectGallery', module)
  .addDecorator(Padding)
  .add('example', () => <ProjectGallery project={project} />)
