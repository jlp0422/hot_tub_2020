import React from 'react'
import { Link } from 'gatsby'

const LayoutWithNav = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/standings'>standings</Link>
        </li>
        <li>
          <Link to='/weekly'>weekly games</Link>
        </li>
        <li>
          <Link to='/seasonal'>seasonal games</Link>
        </li>
        <li>
          <Link to='/teams'>all teams</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default LayoutWithNav
