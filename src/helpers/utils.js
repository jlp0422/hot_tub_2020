// require('dotenv').config()
const axios = require('axios')
// const btoa = require('btoa')

const header = `${process.env.MY_SPORTS_FEEDS_API_KEY}:${process.env.MY_SPORTS_FEEDS_API_PASSWORD}`

export const myAxios = axios.create({
  headers: {
    Authorization: `Basic ${window.btoa(header)}`
  }
})

export const weeklyGamesRoute = ({ seasonYear, seasonType, weekNumber }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/week/${weekNumber}/games.json`

export const seasonalGamesRoute = ({ seasonYear, seasonType, teams = '' }) => {
  const teamsParam = teams.length ? `?team=${teams}` : ''
  return `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/games.json${teamsParam}`
}

export const standingsRoute = ({ seasonYear, seasonType, stats = 'wins' }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/standings.json?stats=${stats}`
