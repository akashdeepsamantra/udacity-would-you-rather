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
      user: null,
      logined: false
    }
    this.setAuthedUser = this.setAuthedUser.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  setAuthedUser(user) {
    this.props.dispatch(handleInitialData(user.target.name))
    this.setState({userLoaded: true, user: user.target.name, logined: true})
  }

  logOut() {
    this.setState({ logined: false })
    console.log('asdf')
  }

  render() {
    if (this.state.userLoaded && this.state.logined) {
      return (
        <div>
          <Header logOut={this.logOut} user={this.state.user}/>
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
