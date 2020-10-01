import React from 'react'
import { Container, Img, TeamLink, TeamLogos, Wins } from './EntryRow.styles'

const EntryRow = ({ entry, getTotalWins, teamsInfo }) => {
  const { teamSelections, _id, teamName } = entry
  const totalWins = teamSelections.reduce(getTotalWins, 0)

  return (
    <Container>
      <span>
        <TeamLink key={_id} to={`/entry/${_id}`}>
          {teamName}
        </TeamLink>
      </span>
      <TeamLogos>
        {teamSelections.map(team => (
          <Img
            src={teamsInfo[team].logo}
            key={team}
            size='35'
            bgColor={teamsInfo[team].colors[0]}
          />
        ))}
      </TeamLogos>
      <Wins>{totalWins}</Wins>
    </Container>
  )
}

export default EntryRow
