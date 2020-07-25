import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Standings = () => {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('/api/standings')
      .then(({ data }) => {
        console.log(data)
        setTeams(data.teams)
      })
      .catch(error => {
        setError(JSON.parse(JSON.stringify(error)))
        console.error(error)
      })
  }, [])

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (!teams.length) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <ul>
        {teams.map(team => (
          <li key={team.team.name}>
            {team.team.name} {team.stats.standings.wins}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Standings
