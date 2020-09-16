import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled.li`
  font-size: 1.6rem;
  background-color: lightslategray;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  font-weight: bold;
`

const Wins = styled.div`
  margin: 0;
`

const TeamLink = styled(Link)`
  text-decoration: none;

  color: white;
  :hover {
    color: lightgray;
  }
`

const EntryRow = ({ entry, getTotalWins }) => {
  const { teamSelections, _id, teamName } = entry
  const totalWins = teamSelections.reduce(getTotalWins, 0)

  return (
    <Container>
      <span>
        <TeamLink key={_id} to={`/entry/${_id}`}>
          {teamName}
        </TeamLink>
      </span>
      <Wins>{totalWins}</Wins>
    </Container>
  )
}

export default EntryRow
