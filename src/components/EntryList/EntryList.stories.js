import React from 'react'
import EntryList from './EntryList'
import entries from '../../mocks/entries.json'
import standings from '../../mocks/standings.json'

export default {
  component: EntryList,
  title: 'Entry/EntryList'
}

const Template = args => <EntryList {...args} />

export const FullList = Template.bind({})
FullList.args = {
  entries,
  standings,
  label: 'Full List'
}
