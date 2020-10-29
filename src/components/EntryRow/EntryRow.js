import React from 'react'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import {
  Container,
  Logo,
  TeamLink,
  TeamName,
  TeamLogos,
  Wins
} from './EntryRow.styles'

const EntryRow = ({ entry, getTotalWins, teamsInfo }) => {
  const { isMobile, isNarrow } = useDeviceDetect()
  const { teamSelections, _id, teamName } = entry
  const totalWins = teamSelections.reduce(getTotalWins, 0)

  return (
    <Container>
      <TeamName>
        <TeamLink key={_id} to={`/entry/${_id}`}>
          {teamName}
        </TeamLink>
      </TeamName>
      <TeamLogos>
        {teamSelections.map(team => (
          <Logo
            src={teamsInfo[team].logo}
            alt={teamsInfo[team].fullName}
            title={teamsInfo[team].fullName}
            key={team}
            size={isNarrow ? '25' : '35'}
            backgroundColor={teamsInfo[team].colors[0]}
          />
        ))}
      </TeamLogos>
      <Wins>
        {totalWins} {!isMobile && 'wins'}
      </Wins>
    </Container>
  )
}

export default EntryRow
