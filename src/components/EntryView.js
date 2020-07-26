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

  const gamesPerTeam = teams.reduce((memo, teamAbbrev) => {
    const gamesForTeam = data.games.filter(
      game =>
        game.schedule.awayTeam.abbreviation === teamAbbrev ||
        game.schedule.homeTeam.abbreviation === teamAbbrev
    )
    return Object.assign({}, memo, { [teamAbbrev]: gamesForTeam }, {})
  }, {})

  console.log(gamesPerTeam)

  return (
    <div>
      {/* <ul>
        {data.games.map(({ schedule, score }) => {
          const away = `${schedule.awayTeam.abbreviation} (${score.awayScoreTotal})`
          const home = `${schedule.homeTeam.abbreviation} (${score.homeScoreTotal}`
          return (
            <li key={schedule.id}>
              Week {schedule.week}: {away} @ {home})
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default EntryView
