import React from 'react'
import useRequest from '../hooks/useRequest'
import Layout from '../components/shared/Layout'
import HandleRequest from '../components/shared/HandleRequest'

const SeasonalContainer = () => {
  // WILL BE USED FOR ENTRY/ID PAGE
  // to add teams: ?teams=MIA,BUF,NYJ
  // probably get from location prop
  const { data, error, loading } = useRequest('/api/seasonal-games')

  return (
    <Layout>
      <HandleRequest loading={loading} error={error}>
        <Seasonal data={data} />
      </HandleRequest>
    </Layout>
  )
}

const Seasonal = ({ data }) => {
  return (
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
  )
}

export default SeasonalContainer
