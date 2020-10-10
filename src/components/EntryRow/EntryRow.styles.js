import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { margin } from 'polished'
import { Img } from '../shared/TeamLogo/TeamLogo'

export const Container = styled.li`
  margin-top: 0;
  display: grid;
  grid-template-columns: minmax(100px, 2fr) auto 100px;
  align-items: center;
  font-weight: bold;
  @media screen and (max-width: 640px) {
    grid-template-columns: minmax(100, 1fr) 100px;
    grid-template-rows: auto;
  }
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
  white-space: nowrap;
  :hover {
    color: lightgray;
  }
`

export const TeamLogos = styled.div`
  margin: 0;
  line-height: 0;
  @media screen and (max-width: 640px) {
    grid-row-start: 2;
    margin-top: ${({ theme }) => theme.size.space.xs};
  }
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
