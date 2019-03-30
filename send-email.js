const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const apiKey = process.env.MAILGUN_API_KEY;
const domain = 'mg.stumptownbear.com';
const mailgun = require('mailgun-js')({ apiKey, domain });

const template = ({ name, email, message }) => `
  name: ${name}
  email: ${email}

  ${message}
`

// create server
const app = express()

app.use(cors())
app.use(helmet())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('*', function (req, res) {
  const { body } = req
  const { name, email, message } = body

  if (!name && !email && !message) {
    res.status(500).send('send me all the data buddy')
    return
  }

  const data = {
    from: `${email} <contact@stumptownbear.com>`,
    to: `thekrambuhl+stumptownbear@gmail.com`,
    subject: `Stumptownbear Contact Form`,
    text: template(body)
  }

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(body)
    }
  })
})

app.listen(3001)

module.exports = app
