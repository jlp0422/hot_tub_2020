import axios from 'axios'
import React, { useReducer } from 'react'
import TeamsList from '../components/TeamsList'

const INITIAL_STATE = { selectedTeams: [] }

function teamsReducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TEAM':
      return { selectedTeams: [...state.selectedTeams, payload.team] }
    case 'REMOVE_TEAM':
      return {
        selectedTeams: state.selectedTeams.filter(
          team => team.id !== payload.id
        )
      }
    default:
      throw new Error()
  }
}

const Teams = () => {
  const [state, dispatch] = useReducer(teamsReducer, INITIAL_STATE)
  const { selectedTeams } = state

  const addTeam = team => dispatch({ type: 'ADD_TEAM', payload: { team } })
  const removeTeam = ({ id }) =>
    dispatch({ type: 'REMOVE_TEAM', payload: { id } })

  const createEntry = async () => {
    const date = new Date()
    const num = Math.floor(Math.random() * 100) + 1
    await axios
      .post('/api/create-entry', {
        teamName: `Test Team ${num}`,
        email: `testy${num}@test.com`,
        teamSelections: selectedTeams.map(({ abbreviation }) => abbreviation),
        fullName: `${num} ${num}`,
        date: date.toString()
      })
      .then(console.log)
      .catch(console.error)
  }

  const totalCost = selectedTeams.reduce((acc, { price }) => (acc += price), 0)

  return (
    <div>
      <h3>total cost: {totalCost}</h3>
      <h3>selected teams:</h3>
      <ul>
        {selectedTeams.map(({ id, name, city, price }) => (
          <li key={id}>
            {city} {name}: {price}
          </li>
        ))}
      </ul>
      <button onClick={createEntry}>Submit entry</button>
      <TeamsList {...{ addTeam, removeTeam, selectedTeams }} />
    </div>
  )
}

export default Teams
