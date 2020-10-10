import React from 'react'
import Badge from './Badge'

export default {
  component: Badge,
  title: 'Shared/Badge'
}

const Template = args => <Badge {...args} />

export const DivisionLeader = Template.bind({})
DivisionLeader.args = {
  type: 'DIVISION_LEADER',
  size: 'mini'
}

export const DivisionWinner = Template.bind({})
DivisionWinner.args = {
  type: 'DIVISION_WINNER',
  size: 'mini'
}
