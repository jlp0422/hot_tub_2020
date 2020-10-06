import React, { useState } from 'react'
import EntryRow from './EntryRow'
import EntryRowExpanded from './EntryRowExpanded'
import styled from '@emotion/styled'

const Container = styled.div`
  cursor: pointer;
`

const EntryRowContainer = props => {
  console.log('**', props)
  const { teamsInfo } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Container onClick={handleClick}>
      <EntryRow {...props} />
      {isExpanded && <EntryRowExpanded teamsInfo={teamsInfo} />}
    </Container>
  )
}

export default EntryRowContainer
