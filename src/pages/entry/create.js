import axios from 'axios'
import React, { useReducer } from 'react'
import LayoutWithNav from '../../components/shared/LayoutWithNav'
import TeamsList from '../../components/TeamsList'

const INITIAL_STATE = {
  fullName: '',
  teamName: '',
  email: '',
  selectedTeams: []
}

function teamsReducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TEAM':
      return { ...state, selectedTeams: [...state.selectedTeams, payload.team] }
    case 'REMOVE_TEAM':
      return {
        ...state,
        selectedTeams: state.selectedTeams.filter(
          team => team.id !== payload.id
        )
      }
    case 'RESET_TEAMS':
      return {
        ...state,
        selectedTeams: []
      }
    case 'UPDATE_TEXT_FIELD':
      return {
        ...state,
        [payload.name]: payload.value
      }
    case 'RESET_FORM':
      return INITIAL_STATE
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
    const { fullName, teamName, email } = state
    const date = new Date()
    // add validation for empty full name, team name, email
    /*const res = */ await axios
      .post('/api/create-entry', {
        fullName,
        teamName,
        email,
        teamSelections: selectedTeams.map(({ abbreviation }) => abbreviation),
        date: date.toString()
      })
      .then(console.log)
      .catch(console.error)

    // console.log('**entry res', res)
  }

  const onResetForm = () => dispatch({ type: 'RESET_FORM' })
  const onClearTeams = () => dispatch({ type: 'RESET_TEAMS' })

  const onChangeField = event => {
    const { name, value } = event.target
    dispatch({ type: 'UPDATE_TEXT_FIELD', payload: { name, value } })
  }

  const totalCost = selectedTeams.reduce((acc, { price }) => (acc += price), 0)

  return (
    <LayoutWithNav>
      <label htmlFor='fullName'>
        full name
        <input
          type='text'
          placeholder='Jon Snow'
          name='fullName'
          id='fullName'
          value={state.fullName}
          onChange={onChangeField}
        />
      </label>
      <label htmlFor='teamName'>
        team name
        <input
          type='text'
          placeholder='Channel 4 News Team'
          name='teamName'
          id='teamName'
          value={state.teamName}
          onChange={onChangeField}
        />
      </label>
      <label htmlFor='email'>
        email address
        <input
          type='email'
          placeholder='first.last@test.com'
          name='email'
          id='email'
          value={state.email}
          onChange={onChangeField}
        />
      </label>
      <button onClick={onResetForm}>reset form</button>
      <h3>total cost: ${totalCost}</h3>
      <h3>selected teams:</h3>
      <button onClick={onClearTeams}>clear teams</button>
      <ul>
        {selectedTeams.map(team => {
          const { city, name, price, id } = team
          return (
            <li key={id}>
              <span>
                {city} {name}: ${price}
              </span>
              <button onClick={() => removeTeam(team)}>remove team</button>
            </li>
          )
        })}
      </ul>
      <button onClick={createEntry}>Submit entry</button>
      <TeamsList {...{ addTeam, removeTeam, selectedTeams }} />
    </LayoutWithNav>
  )
}

export default Teams
