import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import UnansweredQuestions from './UnansweredQuestion'
import AnsweredQuestions from './AnsweredQuestion'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    loading: true,
    value: 0
  }

  componentDidMount() {
    if (this.props.users != null) {
      this.setState({loading: false})
    }
  }

  handleChange(event, value) {
    this.setState({value: value})
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} styles={{color: 'red'}}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><UnansweredQuestions /></TabContainer>}
        {value === 1 && <TabContainer><AnsweredQuestions /></TabContainer>}
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const questionIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  
  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }
  
  const answeredQuestions = questionIds.filter(question => user.answers.hasOwnProperty(question))
  const unansweredQuestions = questionIds.filter(question => !answeredQuestions.includes(question))
  
  return {
    answeredQuestions,
    unansweredQuestions
  }
}

const QuestionListWithStyles = withStyles(styles)(QuestionList)

export default connect(mapStateToProps)(QuestionListWithStyles)