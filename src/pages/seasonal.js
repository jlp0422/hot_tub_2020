import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Seasonal = () => {
  const [games, setGames] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('/api/seasonal-games', {
        params: {
          teams: ''//'MAI,BUF,NYJ'
        }
      })
      .then(({ data }) => {
        console.log(data)
        setGames(data.games)
      })
      .catch(error => {
        setError(JSON.parse(JSON.stringify(error)))
        console.error(error)
      })
  }, [])

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (!games.length) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <ul>
        {games.map(game => (
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
