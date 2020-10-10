import React from 'react'
import styled from '@emotion/styled'

const Span = styled.span`
  padding: ${({ theme }) => theme.size.space.xs};
  background-color: ${({ color }) => color};
  color: white;
  font-weight: bold;
  font-size: ${({ theme, size }) => theme.size.copy[size]};
  border-radius: ${({ theme }) => theme.size.space.xs};
`

const TYPE_TO_COPY = {
  DIVISION_LEADER: 'DL',
  DIVISION_WINNER: 'DW'
}

const TYPE_TO_COLOR = {
  DIVISION_LEADER: '#FFA500',
  DIVISION_WINNER: '#36C565'
}

const Badge = ({ type, size }) => {
  const color = TYPE_TO_COLOR[type]
  const copy = TYPE_TO_COPY[type]
  return (
    <Span color={color} size={size}>
      {copy}
    </Span>
  )
}

export default Badge
