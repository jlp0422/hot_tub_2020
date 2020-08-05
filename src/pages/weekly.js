import React from 'react'
import useRequest from '../hooks/useRequest'
import LayoutWithNav from '../components/shared/LayoutWithNav'

const Seasonal = () => {
  // WILL BE USED FOR WINS PER WEEK PAGE
  // get week number from location prop
  const { data, loading, error } = useRequest('/api/weekly-games?week=5')

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <LayoutWithNav>
      <ul>
        {data.games.map(game => (
          <li key={game.schedule.id}>
            Week {game.schedule.week}: {game.schedule.awayTeam.abbreviation} @{' '}
            {game.schedule.homeTeam.abbreviation}
          </li>
        ))}
      </ul>
    </LayoutWithNav>
  )
}

export default Seasonal
