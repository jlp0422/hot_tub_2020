import React from 'react'
import useRequest from '../hooks/useRequest'
import Layout from '../components/shared/Layout'
import { sortByDivisionRank, reduceTeamsToDivisions } from '../helpers/utils'
import HandleRequest from '../components/shared/HandleRequest'
import Division from '../components/Division'

const StandingsContainer = () => {
  const { data, error, loading } = useRequest('/api/standings')
  return (
    <Layout>
      <HandleRequest error={error} loading={loading}>
        <Standings data={data} />
      </HandleRequest>
    </Layout>
  )
}

const Standings = ({ data }) => {
  const divisions = data.teams.reduce(reduceTeamsToDivisions, {})
  const sortedDivisions = Object.entries(divisions).sort()
  return (
    <ul>
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
    </ul>
  )
}

export default StandingsContainer
