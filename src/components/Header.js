import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link className="brand-logo center" to='/'>Would you rather?</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link exact="true" to='/leaderboard'>Leaderboard</Link></li>
          <li><Link exact="true" to='/add'>Add Question</Link></li>
          <li><Link exact="true" to='/'>{props.user}</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header