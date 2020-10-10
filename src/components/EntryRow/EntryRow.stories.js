import React from 'react'
import EntryRow from './EntryRow'

export default {
  component: EntryRow,
  title: 'Entry/EntryRow'
}

const Template = args => (
  <div style={{ backgroundColor: 'gray' }}>
    <EntryRow {...args} />
  </div>
)

const WINS_PER_TEAM = {
  CAR: 2,
  ATL: 1,
  MIA: 6,
  SEA: 11,
  KC: 4,
  IND: 7,
  SF: 4,
  BUF: 8,
  DEN: 3
}

const TEAMS_INFO = {
  CAR: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/ervfzgrqdpnc7lh5gqwq.svg',
    colors: ['#bada55']
  },
  ATL: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/d8m7hzpsbrl6pnqht8op.svg',
    colors: ['#36c565']
  },
  MIA: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt.svg',
    colors: ['#36c565']
  },
  SEA: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/gcytzwpjdzbpwnwxincg.svg',
    colors: ['#36c565']
  },
  KC: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/ujshjqvmnxce8m4obmvs.svg',
    colors: ['#1493ff']
  },
  IND: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/ketwqeuschqzjsllbid5.svg',
    colors: ['#1493ff']
  },
  SF: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/dxibuyxbk0b9ua5ih9hn.svg',
    colors: ['#bada55']
  },
  BUF: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/giphcy6ie9mxbnldntsf.svg',
    colors: ['#bada55']
  },
  DEN: {
    logo:
      'https://static.www.nfl.com/image/private/t_q-best/league/t0p7m5cjdjy18rnzzqbx.svg',
    colors: ['#1493ff']
  }
}

const ENTRY = {
  teamSelections: ['CAR', 'ATL', 'MIA', 'SEA', 'KC'],
  _id: 1,
  teamName: 'The White Walkers',
  fullName: 'jeremy philipson',
  email: 'jeremyphilipson@gmail.com'
}

const GET_TOTAL_WINS = (memo, team) => (memo += WINS_PER_TEAM[team])

export const Primary = Template.bind({})
Primary.args = {
  entry: ENTRY,
  getTotalWins: GET_TOTAL_WINS,
  teamsInfo: TEAMS_INFO
}

export const LongName = Template.bind({})
LongName.args = {
  entry: {
    ...ENTRY,
    teamName: 'BeatBobbyFlayOnFoodNetworkAtNight'
  },
  getTotalWins: GET_TOTAL_WINS,
  teamsInfo: TEAMS_INFO
}

export const ManyTeams = Template.bind({})
ManyTeams.args = {
  entry: {
    ...ENTRY,
    teamSelections: [
      'CAR',
      'ATL',
      'MIA',
      'SEA',
      'KC',
      'IND',
      'SF',
      'BUF',
      'DEN'
    ]
  },
  getTotalWins: GET_TOTAL_WINS,
  teamsInfo: TEAMS_INFO
}
