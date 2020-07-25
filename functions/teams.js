const sendQuery = require('./utils/sendQuery')

const GET_ALL_TEAMS = `
  query {
    teams {
      data {
        id
        name
        city
        abbreviation
        price
      }
    }
  }
`

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_TEAMS)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ teams: data.teams })
  }
}
