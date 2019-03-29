import React from 'react'
import { Button, InputField } from 'Components'
import styles from './styles.css'

const ContactForm = () => (
  <form className={styles.root} action='#'>
    <div className={styles.name}>
      <InputField
        id='name'
        label='Name'
        type='text'
      />
    </div>

    <div className={styles.email}>
      <InputField
        id='email'
        label='Email'
        type='email'
      />
    </div>

    <div className={styles.message}>
      <InputField
        id='message'
        label='Message'
        type='textarea'
      />
    </div>

    <div className={styles.button}>
      <Button type="submit">Send</Button>
    </div>
  </form>
)

export default ContactForm
