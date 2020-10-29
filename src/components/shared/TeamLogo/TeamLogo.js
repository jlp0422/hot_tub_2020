import React from 'react'
import styled from '@emotion/styled'

export const Img = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: ${({ theme }) => theme.size.space.xxs};
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
`

const TeamLogo = ({ alt, title, src, backgroundColor, size }) => (
  <Img
    alt={alt}
    title={title}
    src={src}
    size={size}
    backgroundColor={backgroundColor}
  />
)

export default TeamLogo
