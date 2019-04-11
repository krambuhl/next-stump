import React, { useState, useEffect, useRef } from 'react'
import { useFetch } from 'react-hooks-fetch';
import classnames from 'classnames'
import { Button, InputField } from 'Components'
import fetch from 'unfetch'
import styles from './styles.css'

const emailUrl = (
  process.env.NODE_ENV !== 'production'
    ? 'https://stumptownbear.com/send-email'
    : '/send-email'
)

const useTimer = (cb) => {
  useEffect(() => {
    const timer = setTimeout(cb, 2000)

    return () => {
      clearTimeout(timer)
    }
  })
}

const ContactForm = ({
  className
}) => {
  const formRef = useRef(null)

  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [hasServerError, setHasServerError] = useState(false)

  const handleSubmit = async (ev) => {
    const form = formRef.current

    ev.preventDefault()

    setIsSending(true)
    setIsSent(false)
    setHasServerError(false)

    const fetchOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    }

    const { error, data } = useFetch(emailUrl, fetchOpts)

    if (error) {
      setIsSending(false)
      setHasServerError(err)
      // useTimer(() => setHasServerError(false))
    }

    if (data) {
      const res = await data.text()

      setIsSending(false)
      setIsSent(true)
      setHasServerError(false)

      // useTimer(() => setIsSent(false))
    }
  }

  return (
    <form
      className={classnames(styles.root, className)}
      ref={formRef}
      onSubmit={handleSubmit}
    >
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

      { isSent &&
        <div className={classnames(styles.feedback, styles.success)}>Email sent!</div>
      }

      { hasServerError &&
        <div className={classnames(styles.feedback, styles.error)}>Error: {hasServerError}</div>
      }

      <div className={styles.button}>
        <Button
          type="submit"
          variant="filled"
          isLoading={isSending}
          disabled={isSending}
        >
          Send
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
