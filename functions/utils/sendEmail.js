require('dotenv').config()
const mailgun = require('mailgun-js')

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
})

module.exports = entry => {
  // entry object
  /**
  {
    "_id": "272052426548183552",
    "teamName": "Test Team 4",
    "email": "testy4@test.com",
    "teamSelections": [
      "BUF",
      "ATL",
      "ARI"
    ],
    "fullName": "4 4",
    "date": "Sat Jul 25 2020 16:17:41 GMT-0400 (Eastern Daylight Time)"
  }
   */
  const data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'jeremyphilipson@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  }

  mg.messages().send(data, (error, body) => {
    console.log(body)
  })
}
