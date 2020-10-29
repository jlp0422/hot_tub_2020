import React from 'react'
import TeamLogo from '../shared/TeamLogo'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import {
  Table,
  Thead,
  Tr,
  BodyRow,
  Th,
  Tbody,
  Td,
  TeamAndLogo
} from './Division.styles'

const Division = ({ divisionName, teams }) => {
  const { isMobile } = useDeviceDetect()
  return (
    <div>
      <h4>{divisionName}</h4>
      <Table>
        <Thead>
          <Tr>
            <Th>Place</Th>
            <Th>Team</Th>
            <Th>Wins</Th>
            <Th>{isMobile ? 'GB' : 'Games Back'}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teams.map(({ team, stats, divisionRank }) => (
            <BodyRow key={team.id}>
              <Td>{divisionRank.rank}</Td>
              <Td>
                <TeamAndLogo isMobile={isMobile}>
                  {!isMobile && `${team.city} ${team.name}`}
                  <TeamLogo
                    src={`${team.officialLogoImageSrc}.svg`}
                    alt={`${team.city} ${team.name}`}
                    title={`${team.city} ${team.name}`}
                    size='20'
                    backgroundColor={team.teamColoursHex[0]}
                  />
                </TeamAndLogo>
              </Td>
              <Td>{stats.standings.wins}</Td>
              <Td>{divisionRank.gamesBack}</Td>
            </BodyRow>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default Division
