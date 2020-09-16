import React from 'react'
import { graphql } from 'gatsby'
import EntryView from '../components/EntryView'

const Entry = ({ data }) => {
  const entry = data.entries.findEntryByID

  return (
    <div>

      <h3>team name: {entry.teamName}</h3>
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
