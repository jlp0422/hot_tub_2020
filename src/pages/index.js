import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hot tub 2020</h1>
      <ul>
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
    </div>
  )
}

export default IndexPage
