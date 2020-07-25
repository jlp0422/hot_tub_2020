import React from 'react'
import useRequest from '../hooks/useRequest'

const Seasonal = () => {
  // WILL BE USED FOR ENTRY/ID PAGE
  const { data, error, loading } = useRequest({
    // to add teams: ?teams=MIA,BUF,NYJ
    // probably get from location prop
    route: '/api/seasonal-games'
  })

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <ul>
        {data.games.map(({ schedule, score }) => {
          const away = `${schedule.awayTeam.abbreviation} (${score.awayScoreTotal})`
          const home = `${schedule.homeTeam.abbreviation} (${score.homeScoreTotal}`
          return (
            <li key={schedule.id}>
              Week {schedule.week}: {away} @ {home})
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Seasonal
