import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { margin } from 'polished'
// import TeamLogo from '../shared/TeamLogo'
import { Img } from '../shared/TeamLogo/TeamLogo'

export const Container = styled.li`
  background-color: lightslategray;
  padding: ${({ theme }) => theme.size.space.xl};
  border-radius: ${({ theme }) => theme.size.space.xs};
  display: grid;
  grid-template-columns: 2fr 3fr 100px;
  align-items: center;
  font-weight: bold;
`

export const TeamName = styled.span`
  font-size: ${({ theme }) => theme.size.copy.h5};
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    color: lightgray;
  }
`

export const TeamLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.copy.h2};
  text-decoration: none;
  color: white;
  :hover {
    color: lightgray;
  }
`

export const TeamLogos = styled.div`
  margin: 0;
  line-height: 0;
  /* overflow: scroll;
  white-space: nowrap; */
`

export const Logo = styled(Img)`
  ${props => margin(0, 0, 0, props.theme.size.space.xs)};
  :first-of-type {
    margin-left: 0;
  }
`

export const Wins = styled.div`
  font-size: ${({ theme }) => theme.size.copy.h5};

  margin: 0;
  text-align: right;
  font-size: ${({ theme }) => theme.size.copy.h2};
`
