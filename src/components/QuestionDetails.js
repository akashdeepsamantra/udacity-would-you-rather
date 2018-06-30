import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component {
  render() {
    const { question } = this.props;
    if (question === undefined) {
      return <div />;
    }
    console.log(question);
    return (
      <div className="container">
        <h5 style={{ textAlign: 'center' }}>Question Details</h5>
        <br />
        <div
          style={{ width: '50%', margin: '0 auto', fontSize: 10 }}
        >
          <p className="alignCenter">
            <strong>Question ID: </strong>
            {question.id}
          </p>
          <p className="alignCenter">
            <strong>Author: </strong>
            {question.author}
          </p>
          <table>
            <tbody>
              <tr>
                <td colSpan={6}>
                  <h6>Option One: </h6>
                </td>
                <td colSpan={6}>
                  <p>Text: "{question.optionOne.text}"</p>
                  <p>Vote Count: {question.optionOne.votes.length}</p>
                </td>
              </tr>
              <tr>
                <td colSpan={6}>
                  <h6>Option Two: </h6>
                </td>
                <td colSpan={6}>
                  <p>Text: "{question.optionTwo.text}"</p>
                  <p>Vote Count: {question.optionTwo.votes.length}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, ownProps) => {
  const questionID = ownProps.match.params.questionID.substring(1);
  return {
    users,
    question: questions[questionID],
    authedUser
  };
};

export default connect(mapStateToProps)(QuestionDetails);
