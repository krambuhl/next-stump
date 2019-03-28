import React from 'react'
import { Heading, Strata, Wrapper } from 'Components'
import styles from './styles.css'

const Contact = () => (
  <Strata id='hello' className={styles.root}>
    <Wrapper>
      <Heading level='h2'>You want to say hello?</Heading>
      <p>Send me a message and we can get creative together.</p>
    </Wrapper>
  </Strata>
)

export default Contact
