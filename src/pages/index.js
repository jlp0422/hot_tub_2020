import axios from 'axios'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { reduceTeamsToWins } from '../helpers/utils'
import useRequest from '../hooks/useRequest'

const IndexPage = () => {
  const [entries, setEntries] = useState([])
  const { data: standings, error, loading } = useRequest({
    route: '/api/standings'
  })

  useEffect(() => {
    const loadEntries = async () => {
      const { entries } = await axios
        .post('/api/entries')
        .then(({ data }) => data)
        .catch(console.error)

      setEntries(entries.data)
    }

    loadEntries()
  }, [])

  if (loading) {
    return null
  }

  const winsByTeam = standings.teams.reduce(reduceTeamsToWins, {})

  return (
    <div>
      <h1>Hot tub 2020</h1>
      <ul>
        {entries.map(entry => {
          const totalWins = entry.teamSelections.reduce(
            (totalWins, teamAbbrev) => (totalWins += winsByTeam[teamAbbrev]),
            0
          )
          return (
            <li key={entry._id}>
              {entry.teamName}: {totalWins} wins
            </li>
          )
        })}
      </ul>

      <ul>
        <li>
          <Link to='/standings'>standings</Link>
        </li>
        <li>
          <Link to='/weekly'>weekly games</Link>
        </li>
        <li>
          <Link to='/seasonal'>seasonal games</Link>
        </li>
        <li>
          <Link to='/teams'>all teams</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage
