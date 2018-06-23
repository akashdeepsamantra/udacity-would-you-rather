import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
      <div className="titleStyle">
        <h2>Would you rather...???</h2>
      </div>
      <div>
        <h3 style={{ color: 'white' }}>{props.user}</h3>
      </div>
    </div>
  )
}

export default Header