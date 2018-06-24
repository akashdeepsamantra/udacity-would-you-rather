import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    if (this.props.users != null) {
      this.setState({loading: false})
    }
  }

  render() {
    console.log(this.props.filteredQuestions)
    return (
      (this.props.users !== 'undefined' && this.props.questions !== 'undefined')?
      <div>

      </div>:
      <div>
        Loading
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const questionIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  
  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }
  
  const filteredQuestions = questionIds.filter(question => user.answers.hasOwnProperty(question))

  return {
    filteredQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)