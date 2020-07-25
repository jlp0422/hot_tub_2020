import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Teams = () => {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    axios
      .post('/api/teams')
      .then(({ data }) => {
        setTeams(data.teams.data)
        console.log(data)
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
        {teams.map(({ id, name, city, price }) => (
          <li key={id}>
            {name} {city}: {price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
