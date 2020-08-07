import React from 'react'
import {
  reduceSelectionsToTotalWins,
  reduceTeamsToWins
} from '../../helpers/utils'
import EntryRow from '../EntryRow/EntryRow'

const EntryList = ({ entries, standings }) => {
  const winsByTeam = standings.teams.reduce(reduceTeamsToWins, {})
  const getTotalWins = reduceSelectionsToTotalWins(winsByTeam)

  return (
    <ul>
      {entries.entries.data.map(entry => (
        <EntryRow key={entry._id} entry={entry} getTotalWins={getTotalWins} />
      ))}
    </ul>
  )
}

export default EntryList
