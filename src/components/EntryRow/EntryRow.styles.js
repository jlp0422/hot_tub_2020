import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Container = styled.li`
  font-size: ${({ theme }) => theme.size.h5};
  background-color: lightslategray;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  align-items: center;
  font-weight: bold;
`

export const TeamLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.h2};
  text-decoration: none;
  color: white;
  :hover {
    color: lightgray;
  }
`

export const TeamLogos = styled.div`
  margin: 0;
`

export const Img = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: 5px 0 0 5px;
  padding: 2px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
  :first-of-type {
    margin-left: 0;
  }
`

export const Wins = styled.div`
  margin: 0;
  text-align: right;
  font-size: ${({ theme }) => theme.size.h2};
`
