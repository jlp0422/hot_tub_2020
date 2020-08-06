import React from 'react'
import useRequest from '../hooks/useRequest'
import LayoutWithNav from '../components/shared/LayoutWithNav'
import { sortByDivisionRank, reduceTeamsToDivisions } from '../helpers/utils'
import HandleRequest from '../components/shared/HandleRequest'

const StandingsContainer = () => {
  const { data, error, loading } = useRequest('/api/standings')
  return (
    <HandleRequest error={error} loading={loading}>
      <Standings data={data} />
    </HandleRequest>
  )
}

const Standings = ({ data }) => {
  const divisions = data.teams.reduce(reduceTeamsToDivisions, {})
  return (
    <LayoutWithNav>
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
    </LayoutWithNav>
  )
}

export default StandingsContainer
