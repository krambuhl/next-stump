import React from 'react';
import { storiesOf } from '@storybook/react';
import { Biography } from 'Components'
import Centered from 'Decorators/Centered'

storiesOf('Biography', module)
  .addDecorator(Centered)
  .add('example', () => <Biography />)
