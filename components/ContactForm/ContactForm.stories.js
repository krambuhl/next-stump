import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContactForm } from 'Components'
import Centered from 'Decorators/Centered'

storiesOf('ContactForm', module)
  .addDecorator(Centered)
  .add('example', () => <ContactForm />)
