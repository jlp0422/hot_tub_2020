import React from 'react'
import useRequest from '../hooks/useRequest'
import LayoutWithNav from '../components/shared/LayoutWithNav'
import HandleRequest from '../components/shared/HandleRequest'

const WeeklyContainer = () => {
  // WILL BE USED FOR WINS PER WEEK PAGE
  // get week number from location prop
  const { data, loading, error } = useRequest('/api/weekly-games?week=5')

  return (
    <HandleRequest loading={loading} error={error}>
      <Weekly data={data} />
    </HandleRequest>
  )
}

const Weekly = ({ data }) => {
  return (
    <LayoutWithNav>
      <ul>
        {data.games.map(game => (
          <li key={game.schedule.id}>
            Week {game.schedule.week}: {game.schedule.awayTeam.abbreviation} @{' '}
            {game.schedule.homeTeam.abbreviation}
          </li>
        ))}
      </ul>
    </LayoutWithNav>
  )
}

export default WeeklyContainer
