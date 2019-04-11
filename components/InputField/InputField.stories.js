import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from 'Components'
import Centered from 'Decorators/Centered'
import { Wrapper720 } from 'Decorators/Wrapper'

storiesOf('InputField', module)
  .addDecorator(Centered)
  .addDecorator(Wrapper720)
  .add('text', () => <InputField id='name' label='Name' type='text' />)
  .add('email', () => <InputField id='email' label='Email' type='email' />)
  .add('password', () => <InputField id='password' label='Password' type='password' />)
  .add('textarea', () => <InputField id='message' label='Message' type='textarea' />)
