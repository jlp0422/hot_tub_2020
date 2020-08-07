import React from 'react'

const TeamsList = ({ addTeam, removeTeam, selectedTeams, teamOptions }) => {
  // add for each team
  // 2019 wins
  // 2020 O/U
  // price
  return (
    <div>
      <ul>
        {teamOptions.map(team => {
          const { id, name, city, price } = team
          const isSelected = selectedTeams.find(t => t.id === id)
          const [handler, text] = isSelected
            ? [removeTeam, 'Remove team']
            : [addTeam, 'Add team']
          return (
            <li key={id}>
              {city} {name}: ${price}
              <button onClick={() => handler(team)}>{text}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeamsList
