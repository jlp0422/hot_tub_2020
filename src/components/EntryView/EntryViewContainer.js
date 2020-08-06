import React from 'react'
import useRequest from '../../hooks/useRequest'
import HandleRequest from '../shared/HandleRequest'
import EntryView from './EntryView'

const EntryViewContainer = ({ teams }) => {
  const { data, error, loading } = useRequest(
    `/api/seasonal-games?teams=${teams.join(',')}`
  )

  return (
    <HandleRequest loading={loading} error={error}>
      <EntryView data={data} teams={teams} />
    </HandleRequest>
  )
}

export default EntryViewContainer
