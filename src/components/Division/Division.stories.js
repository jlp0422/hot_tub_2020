import React from 'react'
import Division from './Division'

export default {
  component: Division,
  title: 'Teams/Division'
}

const Template = args => <Division {...args} />

export const Primary = Template.bind({})
Primary.args = {
  divisionName: 'AFC East',
  teams: [
    {
      divisionRank: { rank: 1, gamesBack: 0 },
      stats: { standings: { wins: 12 } },
      team: {
        id: 50,
        city: 'New England',
        name: 'Patriots',
        abbreviation: 'NE',
        teamColoursHex: ['#002244', '#c60c30', '#b0b7bc'],
        officialLogoImageSrc:
          'https://static.www.nfl.com/image/private/t_q-best/league/moyfxx3dq5pio4aiftnc'
      }
    },
    {
      divisionRank: { rank: 2, gamesBack: 2 },
      stats: { standings: { wins: 10 } },
      team: {
        id: 48,
        city: 'Buffalo',
        name: 'Bills',
        abbreviation: 'BUF',
        teamColoursHex: ['#00338d', '#c60c30'],
        officialLogoImageSrc:
          'https://static.www.nfl.com/image/private/t_q-best/league/giphcy6ie9mxbnldntsf'
      }
    },
    {
      divisionRank: { rank: 3, gamesBack: 5 },
      stats: { standings: { wins: 7 } },
      team: {
        id: 51,
        city: 'New York',
        name: 'Jets',
        abbreviation: 'NYJ',
        teamColoursHex: ['#125740', '#000000', '#ffffff'],
        officialLogoImageSrc:
          'https://static.www.nfl.com/image/private/t_q-best/league/ekijosiae96gektbo4iw'
      }
    },
    {
      divisionRank: { rank: 4, gamesBack: 7 },
      stats: { standings: { wins: 5 } },
      team: {
        id: 49,
        city: 'Miami',
        name: 'Dolphins',
        abbreviation: 'MIA',
        teamColoursHex: ['#008e97', '#fc4c02', '#005778'],
        officialLogoImageSrc:
          'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt'
      }
    }
  ]
}
