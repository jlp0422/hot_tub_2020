import React from 'react'
import EntryRow from './EntryRow'

const Story = args => <EntryRow {...args} />

export default {
  component: EntryRow,
  title: 'EntryRow'
}

// Each story then reuses that template
export const Primary = Story.bind({})

Primary.args = {
  entry: {
    teamSelections: [
      { id: 1, wins: 1 },
      { id: 2, wins: 2 },
      { id: 3, wins: 3 }
    ],
    _id: 1,
    teamName: 'The White Walkers'
  },
  getTotalWins: (memo, acc) => (memo += acc.wins),
  label: 'EntryRow'
}
