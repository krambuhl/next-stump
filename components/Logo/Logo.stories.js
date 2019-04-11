import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from 'Components'
import Theme from 'Decorators/Theme'
import Centered from 'Decorators/Centered'

storiesOf('Logo', module)
  .addDecorator(Centered)
  .add('example', () => <Logo />)
  .add('dark theme', () =>
    <Theme dark>
      <Logo />
    </Theme>
  )
