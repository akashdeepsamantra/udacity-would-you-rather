import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route 
          exact
          path='/'
          component = {QuestionList}
        />
        <Route
          exact
          path = '/leaderboard'
          component = {Leaderboard}
        />
        <Route 
          exact
          path = '/addQuestion'
          component = {AddQuestion}
        />
      </Switch>
    )
  }
}
