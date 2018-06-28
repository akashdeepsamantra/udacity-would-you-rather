import React, { Component } from 'react'

import { getUsers } from '../utils/api'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null,
      loading: true
    }
  }

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({users: users, loading: false})
      })
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    else {
      let users = Object.values(this.state.users)
      return (
        <div className="chooseUser">
          <h1>Welcome</h1>
          <h3>Select your ID</h3>
          {users.map(user => {
            return (
              <div key={user.id} style={{ display: 'inline-block' }} name={user.id} onClick={(user) => this.props.setAuthedUser(user)}>
                <img className="imageStyle" src={user.avatarURL} name={user.id} alt=""/>
                <p className="nameStyle" name={user.id}>{user.name}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default Popup