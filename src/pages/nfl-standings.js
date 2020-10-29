import React from 'react'
import useRequest from '../hooks/useRequest'
import Layout from '../components/shared/Layout'
import { sortByDivisionRank, reduceTeamsToDivisions } from '../helpers/utils'
import HandleRequest from '../components/shared/HandleRequest'
import Division from '../components/Division'
import styled from '@emotion/styled'

const Ul = styled.ul`
  padding: 0;
`

const NflStandingsContainer = () => {
  const { data, error, loading } = useRequest('/api/standings')
  return (
    <Layout>
      <HandleRequest error={error} loading={loading}>
        <NflStandings data={data} />
      </HandleRequest>
    </Layout>
  )
}

const NflStandings = ({ data }) => {
  const divisions = data.teams.reduce(reduceTeamsToDivisions, {})
  const sortedDivisions = Object.entries(divisions).sort()
  return (
    <Ul>
      {sortedDivisions.map(([divisionName, teams]) => {
        const sortedTeams = [...teams].sort(sortByDivisionRank)
        return (
          <Division
            divisionName={divisionName}
            teams={sortedTeams}
            key={divisionName}
          />
        )
      })}
    </Ul>
  )
}

export default NflStandingsContainer
