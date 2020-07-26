const msfRoute = require('./utils/msfRoute')
const { weeklyGamesRoute } = require('./utils/routes')

exports.handler = async request => {
  const { week } = request.queryStringParameters
  const { data, errors } = await msfRoute(
    weeklyGamesRoute({
      seasonYear: 2019,
      seasonType: 'regular',
      weekNumber: week
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
