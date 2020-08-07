import React, { useReducer, useState } from 'react'
import Layout from '../../components/shared/Layout'
import TeamsList from '../../components/TeamsList'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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
  const [activeFields, setActiveFields] = useState({
    fullName: false,
    teamName: false,
    email: false
  })
  const { selectedTeams } = state

  const activateField = field => {
    setActiveFields({
      ...activeFields,
      [field]: true
    })
  }
  const deactivateField = field => {
    setActiveFields({
      ...activeFields,
      [field]: false
    })
  }

  const addTeam = team => dispatch({ type: 'ADD_TEAM', payload: { team } })
  const removeTeam = ({ id }) =>
    dispatch({ type: 'REMOVE_TEAM', payload: { id } })

  const onCreateEntry = async event => {
    event.preventDefault()
    event.stopPropagation()
    // const { fullName, teamName, email } = state
    // const date = new Date()
    console.log('** SUBMITTING ENTRY WITH FORM STATE: ', state)
    // add validation for empty full name, team name, email
    // const res = await axios
    //   .post('/api/create-entry', {
    //     fullName,
    //     teamName,
    //     email,
    //     teamSelections: selectedTeams.map(({ abbreviation }) => abbreviation),
    //     date: date.toString()
    //   })
    //   .then(console.log)
    //   .catch(console.error)

    // console.log('**entry res', res)
  }

  const onResetForm = () => dispatch({ type: 'RESET_FORM' })
  const onClearTeams = () => dispatch({ type: 'RESET_TEAMS' })

  const onChangeField = event => {
    const { name, value } = event.target
    dispatch({ type: 'UPDATE_TEXT_FIELD', payload: { name, value } })
  }

  const totalCost = selectedTeams.reduce((acc, { price }) => (acc += price), 0)
  const formFields = [
    {
      name: 'fullName',
      text: 'Full Name',
      type: 'text'
    },
    {
      name: 'teamName',
      text: 'Team Name',
      type: 'text'
    },
    {
      name: 'email',
      text: 'Email Address',
      type: 'email'
    }
  ]

  const currentTeams = selectedTeams
    .reduce((sentence, team) => (sentence += `${team.abbreviation}, `), '')
    .replace(/, $/, '')

  return (
    <Layout>
      <Form onSubmit={onCreateEntry}>
        {formFields.map(({ name, text, type }) => {
          const focused = activeFields[name] || state[name]
          return (
            <FormField key={name}>
              <Label active={focused} htmlFor={name}>
                {text}
              </Label>
              <Input
                type={type}
                name={name}
                value={state[name]}
                onFocus={() => activateField(name)}
                onBlur={() => deactivateField(name)}
                onChange={onChangeField}
              />
            </FormField>
          )
        })}
        <h3>Selected Teams: {currentTeams}</h3>
        <button onClick={onClearTeams}>Clear teams</button>
        <h3>total cost: ${totalCost}</h3>
        <button type='submit'>Submit entry</button>
        <button onClick={onResetForm}>Reset form</button>
      </Form>
      <TeamsList {...{ addTeam, removeTeam, selectedTeams }} />
    </Layout>
  )
}

const Form = styled.form`
  max-width: 960px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  background-color: #6ada55;
  border-radius: 6px;
`

const FormField = styled.div`
  display: block;
  margin-bottom: 10px;
`

const Label = styled.label`
  cursor: text;
  background-color: white;
  display: inline-block;
  position: relative;
  font-size: 14px;
  padding: 2px;
  left: 10px;
  top: 40px;
  transition: all 150ms linear;
  color: #676767;
  ${props =>
    props.active &&
    css`
      transform: translateY(-19px);
      font-size: 12px;
      color: #000;
      text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff,
        0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff;
    `}
`

const Input = styled.input`
  width: 100%;
  display: block;
  /* border-radius: 4px; */
  /* border: none; */
  padding: 10px;
  /* :focus {
    border: 1px solid red;
  } */
`

export default Teams
