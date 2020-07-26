import React from 'react'
import { graphql } from 'gatsby'
import EntryView from '../components/EntryView'

const Entry = ({ data }) => {
  const entry = data.entries.findEntryByID

  return (
    <div>
      <h3>team name: {entry.teamName}</h3>
      <ul>
        {entry.teamSelections.map(team => (
          <li key={team}>{team}</li>
        ))}
      </ul>
      <EntryView teams={entry.teamSelections} />
    </div>
  )
}

export const query = graphql`
  query Entry($id: ID!) {
    entries {
      findEntryByID(id: $id) {
        teamName
        teamSelections
      }
    }
  }
`

export default Entry
