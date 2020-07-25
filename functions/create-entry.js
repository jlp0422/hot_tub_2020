const sendQuery = require('./utils/sendQuery')
// const sendEmail = require('./utils/sendEmail')

const CREATE_ENTRY = `
  mutation(
    $teamName: String!
    $email: String!
    $teamSelections: [String!]!
    $fullName: String!
    $date: String!
  ) {
    createEntry(
      data: {
        teamName: $teamName
        email: $email
        teamSelections: $teamSelections
        fullName: $fullName
        date: $date
      }
    ) {
      _id
      teamName
      email
      teamSelections
      fullName
      date
    }
  }
`

exports.handler = async event => {
  const variables = JSON.parse(event.body)
  const { data, errors } = await sendQuery(CREATE_ENTRY, { ...variables })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  // sendEmail(data.createEntry)

  return {
    statusCode: 200,
    body: JSON.stringify({ newEntry: data.createEntry })
  }
}
