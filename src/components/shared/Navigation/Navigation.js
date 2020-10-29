import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useDeviceDetect from '../../../hooks/useDeviceDetect'

const Nav = styled.ul`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  list-style: none;
  display: flex;
  width: 100%;
  padding: 15px 30px;
  justify-content: space-around;
  background-color: green;
  > li {
    margin-top: 0;
  }
`

const Dropdown = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 30px;
  left: 0px;
  background-color: blue;
  z-index: 1;
`

const MobileNav = styled.nav`
  padding: 5px 20px;
  text-align: center;
  background-color: green;
`

const Hamburger = styled.span`
  font-size: 30px;
  line-height: 30px;
`

const Navigation = () => {
  const { isMobile } = useDeviceDetect()
  const [isExpanded, setIsExpanded] = useState(false)

  if (isMobile) {
    return (
      <MobileNav>
        <Hamburger role='button' onClick={() => setIsExpanded(!isExpanded)}>
          &#9776;
        </Hamburger>
        {isExpanded && (
          <Dropdown>
            <div>link to standings</div>
            <div>link to standings</div>
            <div>link to standings</div>
            <div>link to standings</div>
          </Dropdown>
        )}
      </MobileNav>
    )
  }

  return (
    <Nav>
      <li>
        <Link to='/'>Standings</Link>
      </li>
      <li>
        <Link to='/nfl-standings'>NFL Standings</Link>
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
