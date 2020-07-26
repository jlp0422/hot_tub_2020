const sendQuery = require('./utils/sendQuery')
// const sendEmail = require('./utils/sendEmail')

const GET_ALL_ENTRIES = `
query {
  entries {
    data {
      _id
      teamName
      teamSelections
      fullName
      email
    }
  }
}
`

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_ENTRIES)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ entries: data.entries })
  }
}
