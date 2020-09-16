import React from 'react'
import {
  reduceSelectionsToTotalWins,
  reduceTeamsToWins
} from '../../helpers/utils'
import EntryRow from '../EntryRow/EntryRow'
import styled from '@emotion/styled'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const EntryList = ({ entries, standings }) => {
  const winsByTeam = standings.teams.reduce(reduceTeamsToWins, {})
  const getTotalWins = reduceSelectionsToTotalWins(winsByTeam)

  return (
    <Ul>
      {entries.entries.data.map(entry => (
        <EntryRow key={entry._id} entry={entry} getTotalWins={getTotalWins} />
      ))}
    </Ul>
  )
}

export default EntryList
