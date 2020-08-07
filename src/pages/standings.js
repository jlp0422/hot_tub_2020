import React from 'react'
import useRequest from '../hooks/useRequest'
import Layout from '../components/shared/Layout'
import { sortByDivisionRank, reduceTeamsToDivisions } from '../helpers/utils'
import HandleRequest from '../components/shared/HandleRequest'

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
  return (
    <ul>
      {Object.entries(divisions)
        .sort()
        .map(([divisionName, teams]) => {
          const sortedTeams = [...teams].sort(sortByDivisionRank)
          return (
            <div key={divisionName}>
              <h4>{divisionName}</h4>
              <ul>
                {sortedTeams.map(team => (
                  <li key={team.team.id}>
                    {team.team.city} {team.team.name}:{' '}
                    {team.stats.standings.wins} Wins,{' '}
                    {team.divisionRank.gamesBack} games back
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
    </ul>
  )
}

export default StandingsContainer
