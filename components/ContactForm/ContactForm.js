import React from 'react'
import classnames from 'classnames'
import { Button, InputField } from 'Components'
import styles from './styles.css'

const ContactForm = ({ className }) => (
  <form className={classnames(styles.root, className)} action='#'>
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
      <Button type="submit" variant="filled">Send</Button>
    </div>
  </form>
)

export default ContactForm
