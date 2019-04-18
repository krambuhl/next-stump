import React from 'react';
import { storiesOf } from '@storybook/react';
import { Resume } from 'Components'
import Padding from 'Decorators/Padding'

const resumeData = require('Content/resume')

storiesOf('Resume', module)
  .addDecorator(Padding)
  .add('example', () => <Resume {...resumeData} />)
