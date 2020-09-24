import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled.li`
  font-size: 1.6rem;
  background-color: lightslategray;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  grid-template-rows: 2fr;
  align-items: center;
  font-weight: bold;
`

const Wins = styled.div`
  margin: 0;
  grid-column-start: 3;
  text-align: right;
`

const TeamLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: lightgray;
  }
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  :first-of-type {
    margin-left: 0;
  }
`

const TeamLogos = styled.div`
  grid-row-start: 2;
`

const EntryRow = ({ entry, getTotalWins, teamLogos }) => {
  console.log('** entry', entry)
  const { teamSelections, _id, teamName } = entry
  const totalWins = teamSelections.reduce(getTotalWins, 0)

  return (
    <Container>
      {/* <EntryAndWins> */}
      <span>
        <TeamLink key={_id} to={`/entry/${_id}`}>
          {teamName}
        </TeamLink>
      </span>
      <Wins>{totalWins}</Wins>
      {/* </EntryAndWins> */}
      <TeamLogos>
        {teamSelections.map(team => (
          <Img src={teamLogos[team]} key={teamLogos[team]} />
        ))}
      </TeamLogos>
    </Container>
  )
}

export default EntryRow
