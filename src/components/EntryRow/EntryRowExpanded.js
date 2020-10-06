import React from 'react'

const EntryRowExpanded = props => {
  console.log('** expanded', props)
  return (
    <div>
      <ul>
        {Object.entries(props.teamsInfo).map(([teamAbbrev, teamInfo]) => (
          <li key={teamAbbrev}>
            {teamInfo.fullName} {teamInfo.wins}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EntryRowExpanded
