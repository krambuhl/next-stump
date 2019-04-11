import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalHeader } from 'Components'
import Theme from 'Decorators/Theme'

storiesOf('GlobalHeader', module)
  .add('example', () => <GlobalHeader />)
  .add('dark theme', () =>
    <Theme dark>
      <GlobalHeader />
    </Theme>
  )
