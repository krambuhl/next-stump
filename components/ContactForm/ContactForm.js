import React from 'react'
import classnames from 'classnames'
import { Button, InputField } from 'Components'
import fetch from 'unfetch'
import styles from './styles.css'

const emailUrl = (
  process.env.NODE_ENV !== 'production'
    ? 'https://stumptownbear.com/send-email'
    : '/send-email'
)

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSending: false,
      isSent: false,
      hasServerError: false
    }

    this.formRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (ev) {
    ev.preventDefault()

    const form = this.formRef.current

    this.setState({
      hasServerError: false,
      isSending: true,
      isSent: false
    })

    fetch(emailUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    })
      .then(res => res.text())
      .then(() => {
        this.setState({
          hasServerError: false,
          isSending: false,
          isSent: true
        })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.setState({
            isSent: false
          })
        }, 2000)
      })
      .catch(err => {
        this.setState({
          hasServerError: err,
          isSending: false
        })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.setState({
            hasServerError: false
          })
        }, 2000)
      })
  }

  render () {
    const { className } = this.props

    return (
      <form
        className={classnames(styles.root, className)}
        ref={this.formRef}
        onSubmit={this.handleSubmit}
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

        { this.state.isSent &&
          <div className={classnames(styles.feedback, styles.success)}>Email sent!</div>
        }

        { this.state.hasServerError &&
          <div className={classnames(styles.feedback, styles.error)}>Error: {this.state.hasServerError}</div>
        }

        <div className={styles.button}>
          <Button
            type="submit"
            variant="filled"
            isLoading={this.state.isSending}
            disabled={this.state.isSending}
          >
            Send
          </Button>
        </div>
      </form>
    )
  }
}

export default ContactForm
