import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
