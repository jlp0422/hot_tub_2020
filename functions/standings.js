const msfRoute = require('./utils/msfRoute')
const { standingsRoute } = require('./utils/routes')

exports.handler = async () => {
  const { data, errors } = await msfRoute(
    standingsRoute({ seasonYear: 2019, seasonType: 'regular' })
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
