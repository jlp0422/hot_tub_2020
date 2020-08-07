import React from 'react'
import { Link } from 'gatsby'

const EntryRow = ({ entry, getTotalWins }) => {
  const { teamSelections, _id, teamName } = entry
  const totalWins = teamSelections.reduce(getTotalWins, 0)

  return (
    <Link key={_id} to={`/entry/${_id}`}>
      <li>
        {teamName}: {totalWins} wins
      </li>
    </Link>
  )
}

export default EntryRow
