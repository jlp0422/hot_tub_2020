import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TeamsList = ({ addTeam, removeTeam, selectedTeams }) => {
  const [teamOptions, setTeams] = useState([])
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

  if (!teamOptions.length) {
    return <h3>Loading...</h3>
  }

  return (
    <ul>
      {teamOptions.map(team => {
        const { id, name, city, price } = team
        const isSelected = selectedTeams.find(t => t.id === id)
        const [handler, text] = isSelected
          ? [removeTeam, 'Remove team']
          : [addTeam, 'Add team']
        return (
          <li key={id}>
            {city} {name}: {price}
            <button onClick={() => handler(team)}>{text}</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TeamsList
