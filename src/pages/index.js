import React, { useEffect } from 'react'
import axios from 'axios'
import { standingsRoute } from '../helpers/utils'

const IndexPage = () => {
  const createEntry = async () => {
    const date = new Date()
    await axios
      .post('/api/create-entry', {
        teamName: 'Test Team',
        email: 'testy@test.com',
        teamSelections: ['MIA', 'NYJ', 'BUF'],
        fullName: 'Jeremy Philipson',
        date: date.toString()
      })
      .then(console.log)
      .catch(console.error)
  }

  return (
    <div>
      <h1>Hot tub 2020</h1>
      <button onClick={createEntry}>create an entry</button>
    </div>
  )
}

export default IndexPage
