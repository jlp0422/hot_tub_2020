import React from 'react'
import useRequest from '../hooks/useRequest'
import LayoutWithNav from '../components/shared/LayoutWithNav'
import HandleRequest from '../components/shared/HandleRequest'

const SeasonalContainer = () => {
  // WILL BE USED FOR ENTRY/ID PAGE
  // to add teams: ?teams=MIA,BUF,NYJ
  // probably get from location prop
  const { data, error, loading } = useRequest('/api/seasonal-games')

  return (
    <HandleRequest loading={loading} error={error}>
      <Seasonal data={data} />
    </HandleRequest>
  )
}

const Seasonal = ({ data }) => {
  return (
    <LayoutWithNav>
      <ul>
        {data.games.map(({ schedule, score }) => {
          const away = `${schedule.awayTeam.abbreviation} (${score.awayScoreTotal})`
          const home = `${schedule.homeTeam.abbreviation} (${score.homeScoreTotal}`
          return (
            <li key={schedule.id}>
              Week {schedule.week}: {away} @ {home})
            </li>
          )
        })}
      </ul>
    </LayoutWithNav>
  )
}

export default SeasonalContainer
