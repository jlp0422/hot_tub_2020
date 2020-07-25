import React from 'react'
import useRequest from '../hooks/useRequest'

const Seasonal = () => {
  const { data, error } = useRequest({
    // to add teams: ?teams=MIA,BUF,NYJ
    route: '/api/seasonal-games'
  })

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (!data) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <ul>
        {data.games.map(game => (
          <li key={game.schedule.id}>
            Week {game.schedule.week}: {game.schedule.awayTeam.abbreviation} @{' '}
            {game.schedule.homeTeam.abbreviation}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Seasonal
