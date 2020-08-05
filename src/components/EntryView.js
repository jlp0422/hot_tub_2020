import React from 'react'
import useRequest from '../hooks/useRequest'

const EntryView = ({ teams }) => {
  const { data, error, loading } = useRequest(
    `/api/seasonal-games?teams=${teams.join(',')}`
  )

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  const getDidTeamPlayInGame = teamAbbrev => game =>
    game.schedule.awayTeam.abbreviation === teamAbbrev ||
    game.schedule.homeTeam.abbreviation === teamAbbrev

  const getScheduleForTeam = teamAbbrev => (memo, { schedule, score }) => {
    const isHomeTeam = schedule.homeTeam.abbreviation === teamAbbrev
    const isWinner = isHomeTeam
      ? score.homeScoreTotal > score.awayScoreTotal
      : score.homeScoreTotal < score.awayScoreTotal
    return Object.assign({}, memo, { [schedule.week]: isWinner })
  }

  const getWinsForWeek = weekNumber =>
    teams.filter(team => teamWinsByWeek[team].byWeek[weekNumber]).length

  const gamesByWeek = data.games.reduce((memo, game) => {
    const { week } = game.schedule
    memo[week] ? memo[week].push(game) : (memo[week] = [game])
    return memo
  }, {})

  const teamWinsByWeek = teams.reduce((memo, teamAbbrev) => {
    const didTeamPlayInGame = getDidTeamPlayInGame(teamAbbrev)
    const reduceScheduleForTeam = getScheduleForTeam(teamAbbrev)

    const gamesForTeam = data.games
      .filter(didTeamPlayInGame)
      .reduce(reduceScheduleForTeam, {})

    const totalWins = Object.values(gamesForTeam).filter(Boolean).length

    return Object.assign({}, memo, {
      [teamAbbrev]: { byWeek: gamesForTeam, totalWins }
    })
  }, {})

  const combinedTeamWins = teams.reduce(
    (memo, teamAbbrev) => (memo += teamWinsByWeek[teamAbbrev].totalWins),
    0
  )

  return (
    <div>
      <h2>EntryView.js</h2>
      <h4>total wins: {combinedTeamWins}</h4>
      <ul>
        {teams.map(team => (
          <React.Fragment key={team}>
            <li>
              {team}: {teamWinsByWeek[team].totalWins} wins
            </li>
          </React.Fragment>
        ))}
      </ul>
      <ul>
        {Object.entries(gamesByWeek).map(([weekNumber, games]) => (
          <li key={weekNumber}>
            week {weekNumber}, total wins: {getWinsForWeek(weekNumber)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EntryView
