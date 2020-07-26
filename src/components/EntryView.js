import React from 'react'
import useRequest from '../hooks/useRequest'

const EntryView = ({ teams }) => {
  const { data, error, loading } = useRequest({
    route: `/api/seasonal-games?teams=${teams.join(',')}`
  })

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  const teamWinsByWeek = teams.reduce((memo, teamAbbrev) => {
    const gamesForTeam = data.games
      .filter(
        game =>
          game.schedule.awayTeam.abbreviation === teamAbbrev ||
          game.schedule.homeTeam.abbreviation === teamAbbrev
      )
      .reduce((memo, { schedule, score }) => {
        const isHomeTeam = schedule.homeTeam.abbreviation === teamAbbrev
        const isWinner = isHomeTeam
          ? score.homeScoreTotal > score.awayScoreTotal
          : score.homeScoreTotal < score.awayScoreTotal
        return Object.assign({}, memo, { [schedule.week]: isWinner })
      }, {})
    const totalWins = Object.values(gamesForTeam).filter(Boolean).length
    return Object.assign({}, memo, {
      [teamAbbrev]: { byWeek: gamesForTeam, totalWins }
    })
  }, {})

  console.log(teamWinsByWeek)

  return (
    <div>
      <ul>
        {teams.map(team => (
          <React.Fragment key={team}>
            <li>
              {team}: {teamWinsByWeek[team].totalWins} wins
            </li>
            <ul>
              {Object.entries(teamWinsByWeek[team].byWeek).map(
                ([weekNumber, isWinner]) => (
                  <li key={weekNumber}>
                    week {weekNumber}{isWinner ? ': win' : null}
                  </li>
                )
              )}
            </ul>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default EntryView
