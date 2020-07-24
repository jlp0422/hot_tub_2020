require('dotenv').config()
const axios = require('axios')
const Base64 = require('js-base64').Base64

const header = `${process.env.MY_SPORTS_FEEDS_API_KEY}:${process.env.MY_SPORTS_FEEDS_API_PASSWORD}`

module.exports = async route => {
  const result = await axios({
    url: route,
    method: 'get',
    headers: {
      Authorization: `Basic ${Base64.btoa(header)}`
    }
  })

  return result
}
