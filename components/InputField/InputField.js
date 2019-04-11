import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

const ContactForm = ({
  id,
  label,
  type = 'text',
  placeholder
}) => (
  <div className={styles.root}>
    <label className={styles.label} htmlFor={id}>{label}</label>
    { type === 'textarea'
      ? (
        <textarea
          className={classnames(styles.input, styles.textarea)}
          id={id}
          name={id}
          placeholder={placeholder || label}
          required
        />
      )
      : (
        <input
          className={classnames(styles.input, styles.text)}
          id={id}
          name={id}
          type={type}
          placeholder={placeholder || label}
          required
        />
      )
    }
  </div>
)

export default ContactForm
