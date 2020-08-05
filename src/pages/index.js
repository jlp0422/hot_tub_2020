import React from 'react'
import LayoutWithNav from '../components/shared/LayoutWithNav'
import {
  reduceSelectionsToTotalWins,
  reduceTeamsToWins
} from '../helpers/utils'
import useRequest from '../hooks/useRequest'
import { Link } from 'gatsby'

const App = () => {
  const { data: standings, loading: isLoadingStandings } = useRequest(
    '/api/standings'
  )
  const { data: entries, loading: isLoadingEntries } = useRequest(
    '/api/entries'
  )

  if (isLoadingEntries || isLoadingStandings) {
    return null
  }

  const winsByTeam = standings.teams.reduce(reduceTeamsToWins, {})
  const getTotalWins = reduceSelectionsToTotalWins(winsByTeam)

  return (
    <LayoutWithNav>
      <h1>Hot tub 2020</h1>
      <ul>
        {entries.entries.data.map(entry => {
          const totalWins = entry.teamSelections.reduce(getTotalWins, 0)
          return (
            <Link key={entry._id} to={`/entry/${entry._id}`}>
              <li>
                {entry.teamName}: {totalWins} wins
              </li>
            </Link>
          )
        })}
      </ul>
    </LayoutWithNav>
  )
}

export default App
