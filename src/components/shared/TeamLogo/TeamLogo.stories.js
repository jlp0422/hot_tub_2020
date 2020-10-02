import React from 'react'
import TeamLogo from './TeamLogo'

export default {
  component: TeamLogo,
  title: 'Teams/TeamLogo'
}

const Template = args => <TeamLogo {...args} />

export const Small = Template.bind({})
Small.args = {
  src:
    'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt',
  backgroundColor: '#008e97',
  size: 35
}

export const Medium = Template.bind({})
Medium.args = {
  src:
    'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt',
  backgroundColor: '#fc4c02',
  size: 70
}

export const Large = Template.bind({})
Large.args = {
  src:
    'https://static.www.nfl.com/image/private/t_q-best/league/lits6p8ycthy9to70bnt',
  backgroundColor: '#008e97',
  size: 100
}
