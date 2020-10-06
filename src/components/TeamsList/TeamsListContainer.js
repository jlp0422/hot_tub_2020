import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HandleRequest from '../shared/HandleRequest'
import TeamsList from './TeamsList'

const TeamsListContainer = props => {
  const [teamOptions, setTeams] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .post('/api/teams')
      .then(({ data }) => {
        setTeams(data.teams.data)
        console.log('** TEAMS LIST', data)
      })
      .catch(error => {
        setError(JSON.parse(JSON.stringify(error)))
        console.error(error)
      })
  }, [])

  return (
    <HandleRequest loading={!teamOptions.length} error={error}>
      <TeamsList {...props} teamOptions={teamOptions} />
    </HandleRequest>
  )
}

export default TeamsListContainer
