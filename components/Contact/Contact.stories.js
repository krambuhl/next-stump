import React from 'react';
import { storiesOf } from '@storybook/react';
import { Contact } from 'Components'
import Centered from 'Decorators/Centered'

storiesOf('Contact', module)
  .addDecorator(Centered)
  .add('example', () => <Contact />)
