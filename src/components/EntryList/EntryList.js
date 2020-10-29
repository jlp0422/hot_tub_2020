import React from 'react'
import {
  reduceSelectionsToTotalWins,
  reduceTeamsToWins
} from '../../helpers/utils'
import EntryRow from '../EntryRow'
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
        <EntryRow
          key={entry._id}
          entry={entry}
          getTotalWins={getTotalWins}
          teamsInfo={entry.teamSelections.reduce(
            (memo, teamAbbrev) =>
              Object.assign({}, memo, {
                [teamAbbrev]: winsByTeam[teamAbbrev]
              }),
            {}
          )}
        />
      ))}
      {entries.entries.data.map(entry => (
        <EntryRow
          key={entry._id}
          entry={entry}
          getTotalWins={getTotalWins}
          teamsInfo={entry.teamSelections.reduce(
            (memo, teamAbbrev) =>
              Object.assign({}, memo, {
                [teamAbbrev]: winsByTeam[teamAbbrev]
              }),
            {}
          )}
        />
      ))}
    </Ul>
  )
}

export default EntryList
