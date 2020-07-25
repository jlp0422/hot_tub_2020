const msfRoute = require('./utils/msfRoute')
const { seasonalGamesRoute } = require('./utils/routes')

exports.handler = async request => {
  const { teams } = request.queryStringParameters
  const { data, errors } = await msfRoute(
    seasonalGamesRoute({
      seasonYear: 2019,
      seasonType: 'regular',
      teams
    })
  )

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
