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
    const answered = Object.values(this.props.users).filter(user => user.id === this.props.user)[0]
    // console.log(answered["id"])
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

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users: users,
  questions: questions,
  user: authedUser
})

export default connect(mapStateToProps)(QuestionList)