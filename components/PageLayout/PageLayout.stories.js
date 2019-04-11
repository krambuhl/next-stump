import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageLayout } from 'Components'

storiesOf('PageLayout', module)
  .add('example', () => <PageLayout><p>Normal content</p></PageLayout>)
  .add('dark theme', () => <PageLayout dark><p>Dark content</p></PageLayout>)
  .add('error theme', () => <PageLayout dark error><p>Error content</p></PageLayout>)
