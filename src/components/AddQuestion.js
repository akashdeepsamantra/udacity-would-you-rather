import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../actions/shared';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.addQuestion = this.addQuestion.bind(this);
  }
  state = {
    optionOneText: '',
    optionTwoText: '',
    redirectHome: false
  };
  addQuestion(authedUser) {
    handleAddQuestion({
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText,
      author: authedUser
    }, this.props.dispatch);
    this.setState({ redirectHome: true })
  }

  render() {

    if (this.state.redirectHome) {
      return <Redirect to='/' />
    }

    return (
      <div className="container">
        <h5 style={{ textAlign: 'center' }}>Add Question</h5>
        <br />
        <div
          className="input-field col s6"
          style={{ width: '50%', margin: '0 auto', fontSize: 10 }}
        >
          <input
            id="optionOneText"
            type="text"
            className="validate"
            onChange={event => this.setState({ optionOneText: event.target.value })}
          />
          <label htmlFor="optionOneText">Option One</label>
        </div>
        <div
          className="input-field col s6"
          style={{ width: '50%', margin: '0 auto', marginTop: 3, fontSize: 10 }}
        >
          <input
            id="optionTwoText"
            type="text"
            className="validate"
            onChange={event => this.setState({ optionTwoText: event.target.value })}
          />
          <label htmlFor="optionTwoText">Option Two</label>
        </div>
        <br />
        <button
          className="btn waves-effect blue center-align"
          type="submit"
          name="action"
          style={{ width: '50%', marginLeft: '25%' }}
          onClick={() => this.addQuestion(this.props.authedUser)}
        >
          Submit
        </button>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
