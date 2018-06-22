import React, { Component } from 'react'
import { connect } from 'react-redux'



class QuestionList extends Component {

  render() {
    return (
      <div>
        QuestionList
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(QuestionList)