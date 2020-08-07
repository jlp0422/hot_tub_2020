import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 10px 30px;
  justify-content: space-around;
`

const Navigation = () => {
  return (
    <Nav>
      <li>
        <Link to='/'>Standings</Link>
      </li>
      <li>
        <Link to='/standings'>NFL Standings</Link>
      </li>
      <li>
        <Link to='/weekly'>Weekly Games</Link>
      </li>
      <li>
        <Link to='/seasonal'>Seasonal Games</Link>
      </li>
      <li>
        <Link to='/entry/create'>Create Entry</Link>
      </li>
    </Nav>
  )
}

export default Navigation
