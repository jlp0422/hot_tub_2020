const weeklyGamesRoute = ({ seasonYear, seasonType, weekNumber }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/week/${weekNumber}/games.json`

const seasonalGamesRoute = ({ seasonYear, seasonType, teams = '' }) => {
  const teamsParam = teams.length ? `?team=${teams}` : ''
  return `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/games.json${teamsParam}`
}

const standingsRoute = ({ seasonYear, seasonType, stats = 'wins' }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/standings.json?stats=${stats}`

module.exports = { weeklyGamesRoute, seasonalGamesRoute, standingsRoute }
