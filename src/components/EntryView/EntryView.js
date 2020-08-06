import React from 'react'
import {
  getDidTeamPlayInGame,
  getWinnerScheduleForTeam
} from '../../helpers/utils'

const EntryView = ({ data, teams }) => {
  const getWinsForWeek = weekNumber =>
    teams.filter(team => teamWinsByWeek[team].byWeek[weekNumber]).length

  const gamesByWeek = data.games.reduce((memo, game) => {
    const { week } = game.schedule
    memo[week] ? memo[week].push(game) : (memo[week] = [game])
    return memo
  }, {})

  const teamWinsByWeek = teams.reduce((memo, teamAbbrev) => {
    const didTeamPlayInGame = getDidTeamPlayInGame(teamAbbrev)
    const reduceGamesToWins = getWinnerScheduleForTeam(teamAbbrev)

    const gamesForTeam = data.games
      .filter(didTeamPlayInGame)
      .reduce(reduceGamesToWins, {})

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
