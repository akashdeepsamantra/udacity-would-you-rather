import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import QuestionDetails from './QuestionDetails';

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
          path='/leaderboard'
          component = {Leaderboard}
        />
        <Route 
          exact
          path='/add'
          component = {AddQuestion}
        />
        <Route
          exact
          path='/question/:questionID'
          component={QuestionDetails}
        />
      </Switch>
    )
  }
}
