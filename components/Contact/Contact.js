import React from 'react'
import { ContactForm, Heading, Strata, Wrapper } from 'Components'
import styles from './styles.css'

const Contact = () => (
  <Strata id='hello' className={styles.root}>
    <Wrapper className="u-rhythm--sm">
      <Heading level='h2'>You want to say hello?</Heading>
      <p>Send me a message and we can get creative together!</p>

      <ContactForm className={styles.form} />
    </Wrapper>
  </Strata>
)

export default Contact
