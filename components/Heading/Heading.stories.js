import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from 'Components'
import Centered from 'Decorators/Centered'

storiesOf('Heading', module)
  .addDecorator(Centered)
  .add('Level 1', () => <Heading level="h1">H1, Velit exercitation aliqua</Heading>)
  .add('Level 2', () => <Heading level="h2">H2, Ex dolore in nostrud ad cupidatat</Heading>)
  .add('Level 3', () => <Heading level="h3">H3, Est dolor tempor mollit et ut cillum</Heading>)
  .add('Level 4', () => <Heading level="h4">H4, Velit laborum qui esse adipisicing</Heading>)
  .add('Level 5', () => <Heading level="h5">H5, Velit aliquip cillum aliqua nostrud</Heading>)
  .add('Level 6', () => <Heading level="h6">H6, Qui ad sit veniam cupidatat</Heading>)
