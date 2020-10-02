import React from 'react'
import styled from '@emotion/styled'
import TeamLogo from '../shared/TeamLogo'

const Table = styled.table`
  width: 100%;
`

const Thead = styled.thead`
  font-size: ${props => props.theme.size.copy.h4};
`
const Tr = styled.tr`
  padding: ${props => `${props.theme.size.space.xs} 0`};
`

const Th = styled.th`
  padding: ${props => props.theme.size.space.xs};
`
const Tbody = styled.tbody`
  font-size: ${props => props.theme.size.copy.h5};
  text-align: center;
`
const Td = styled.td`
  padding: ${props => props.theme.size.space.xs};
`

const TeamAndLogo = styled.span`
  display: flex;
  justify-content: center;
  > img {
    margin-left: ${props => props.theme.size.space.xs};
  }
`

const Division = ({ divisionName, teams }) => {
  return (
    <div>
      <h4>{divisionName}</h4>
      <Table>
        <Thead>
          <Tr>
            <Th>Place</Th>
            <Th>Team</Th>
            <Th>Wins</Th>
            <Th>Games Back</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teams.map(({ team, stats, divisionRank }) => {
            const src = `${team.officialLogoImageSrc}.svg`
            return (
              <Tr key={team.id}>
                <Td>{divisionRank.rank}</Td>
                <Td>
                  <TeamAndLogo>
                    {team.city} {team.name}
                    <TeamLogo
                      src={src}
                      size='20'
                      backgroundColor={team.teamColoursHex[0]}
                    />
                  </TeamAndLogo>
                </Td>
                <Td>{stats.standings.wins}</Td>
                <Td>{divisionRank.gamesBack}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </div>
  )
}

export default Division
