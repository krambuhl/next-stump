import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorPage } from 'Components'

storiesOf('ErrorPage', module)
  .add('example', () => <ErrorPage />)
  .add('404', () => <ErrorPage statusCode={404} />)
