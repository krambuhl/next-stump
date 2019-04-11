import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'Components'
import Centered from 'Decorators/Centered'

storiesOf('Button', module)
  .addDecorator(Centered)
  .add('with text', () => <Button onClick={action('clicked')}>Send</Button>)
  .add('with link', () => <Button href="#/">Link</Button>)
  .add('filled variant', () => <Button variant="filled">Filled Button</Button>)
  .add('loading state', () => <Button variant="filled" isLoading>Loading Button</Button>)
