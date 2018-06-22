import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import Routes from './Routes'
import Popup from './Popup'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLoaded: false
    }
    this.setAuthedUser = this.setAuthedUser.bind(this)
  }

  setAuthedUser(user) {
    this.props.dispatch(handleInitialData(user.target.name))
    this.setState({userLoaded: true})
  }

  render() {
    if (this.state.userLoaded) {
      return <Routes />
    }
    else {
      return <Popup setAuthedUser={this.setAuthedUser} />
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

export default connect(mapDispatchToProps)(App);
