import React from 'react'
import useRequest from '../../hooks/useRequest'
import HandleRequest from '../shared/HandleRequest'
import EntryList from './EntryList'

const EntryListContainer = () => {
  const {
    data: standings,
    loading: isLoadingStandings,
    error: standingsError
  } = useRequest('/api/standings')
  const {
    data: entries,
    loading: isLoadingEntries,
    error: entriesError
  } = useRequest('/api/entries')

  return (
    <HandleRequest
      loading={isLoadingEntries || isLoadingStandings}
      error={entriesError || standingsError}
    >
      <EntryList entries={entries} standings={standings} />
    </HandleRequest>
  )
}

export default EntryListContainer
