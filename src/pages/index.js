import React, { useEffect } from 'react'
import axios from 'axios'

const IndexPage = () => {
  useEffect(() => {
    axios.get('/api/weekly-games').then(console.log).catch(console.error)
  }, [])
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
