import React from 'react'
import useRequest from '../hooks/useRequest'
import LayoutWithNav from '../components/shared/LayoutWithNav'

const Seasonal = () => {
  // WILL BE USED FOR ENTRY/ID PAGE
  // to add teams: ?teams=MIA,BUF,NYJ
  // probably get from location prop
  const { data, error, loading } = useRequest('/api/seasonal-games')

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <LayoutWithNav>
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
    </LayoutWithNav>
  )
}

export default Seasonal
