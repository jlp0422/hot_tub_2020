import React from 'react'
import EntryRow from './EntryRow'

const Story = args => <EntryRow {...args} />

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

export default {
  component: EntryRow,
  title: 'EntryRow'
}

// Each story then reuses that template
export const Primary = Story.bind({})

Primary.args = {
  entry: {
    teamSelections: ['CAR', 'ATL', 'MIA', 'SEA', 'KC'],
    _id: 1,
    teamName: 'The White Walkers',
    fullName: 'jeremy philipson',
    email: 'jeremyphilipson@gmail.com'
  },
  getTotalWins: (memo, team) => (memo += WINS_PER_TEAM[team]),
  teamLogos: {
    CAR:
      'https://static.www.nfl.com/image/private/t_q-best/league/ervfzgrqdpnc7lh5gqwq.svg',
    ATL:
      'https://static.www.nfl.com/image/private/t_q-best/league/d8m7hzpsbrl6pnqht8op.svg',
    MIA:
      'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt.svg',
    SEA:
      'https://static.www.nfl.com/image/private/t_q-best/league/gcytzwpjdzbpwnwxincg.svg',
    KC:
      'https://static.www.nfl.com/image/private/t_q-best/league/ujshjqvmnxce8m4obmvs.svg',
    IND:
      'https://static.www.nfl.com/image/private/t_q-best/league/ketwqeuschqzjsllbid5.svg',
    SF:
      'https://static.www.nfl.com/image/private/t_q-best/league/dxibuyxbk0b9ua5ih9hn.svg',
    BUF:
      'https://static.www.nfl.com/image/private/t_q-best/league/giphcy6ie9mxbnldntsf.svg',
    DEN:
      'https://static.www.nfl.com/image/private/t_q-best/league/t0p7m5cjdjy18rnzzqbx.svg'
  },
  label: 'EntryRow'
}
