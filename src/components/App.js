import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'
import Routes from './Routes'
import Popup from './Popup'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLoaded: false,
      user: null
    }
    this.setAuthedUser = this.setAuthedUser.bind(this)
  }

  setAuthedUser(user) {
    this.props.dispatch(handleInitialData(user.target.name))
    this.setState({userLoaded: true, user: user.target.name})
  }

  render() {
    if (this.state.userLoaded) {
      return (
        <div>
          <Header user={this.state.user}/>
          <Routes user={this.state.user}/>
        </div>
      )
    }
    else {
      return <Popup setAuthedUser={this.setAuthedUser} />
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

export default withRouter(connect(mapDispatchToProps)(App))
