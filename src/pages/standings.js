import React from 'react'
import useRequest from '../hooks/useRequest'

const Standings = () => {
  // WILL BE USED FOR NFL STANDINGS PAGE
  const { data, error, loading } = useRequest({
    route: '/api/standings'
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
        {data.teams.map(team => (
          <li key={team.team.name}>
            {team.team.name} {team.stats.standings.wins}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Standings
