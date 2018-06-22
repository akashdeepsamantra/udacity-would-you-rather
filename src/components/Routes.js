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
          render = {props => (
            <div>
              <QuestionList />
            </div>
          )}
        />
        <Route
          exact
          path = '/leaderboard'
          render = {props => (
            <div>
              <Leaderboard />
            </div>
          )}
        />
        <Route 
          exact
          path = '/addQuestion'
          render = {props => (
            <div>
              <AddQuestion />
            </div>
          )}
        />
      </Switch>
    )
  }
}
