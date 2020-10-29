import React from 'react'
import styled from '@emotion/styled'
import Badge from '../shared/Badge'

const List = styled.ul`
  padding: 0;
`

const Row = styled.li`
  margin-top: 0;
  list-style: none;
  display: flex;
  align-items: baseline;
`

const TeamWins = styled.p`
  padding-right: ${({ theme }) => theme.size.space.xs};
`

const EntryRowExpanded = props => {
  console.log('** expanded', props)
  return (
    <div>
      <List>
        {Object.entries(props.teamsInfo).map(
          ([teamAbbrev, { fullName, wins, divisionRank }]) => (
            <Row key={teamAbbrev}>
              <TeamWins>
                {fullName}: {wins} {wins === 1 ? 'win' : 'wins'}
              </TeamWins>
              <Badge type={wins < 8 ? 'DIVISION_LEADER' : 'DIVISION_WINNER'} />
            </Row>
          )
        )}
      </List>
    </div>
  )
}

export default EntryRowExpanded
