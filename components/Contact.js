import React from 'react'
import { Heading, Strata, Wrapper } from 'Components'

const Contact = () => (
  <Strata id='hello' className='Contact__root'>
    <Wrapper>
      <Heading level='h2'>You want to say hello?</Heading>
      <p>Send me a message and we can get creative together.</p>
    </Wrapper>
    <style jsx>{`
      :global(.Contact__root) {
        border-top: var(--section-border) solid var(--color-offtan);
        align-items: center;
      }
    `}</style>
  </Strata>
)

export default Contact
