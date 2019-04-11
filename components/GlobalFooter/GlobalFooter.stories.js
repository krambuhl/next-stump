import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalFooter } from 'Components'
import Theme from 'Decorators/Theme'

storiesOf('GlobalFooter', module)
  .add('example', () => <GlobalFooter />)
  .add('dark theme', () =>
    <Theme dark>
      <GlobalFooter />
    </Theme>
  )
