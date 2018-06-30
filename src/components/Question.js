import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleSaveAnswer } from '../actions/shared';

const styles = theme => ({
  card: {
    width: '95%',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  button: {
    margin: theme.spacing.unit
  },
  selectedOption: {
    color: 'white',
    backgroundColor: 'green'
  }
});





class Question extends Component {
  state = {
    redirect: false
  }


  render() {
    const questionAnswered = (answer, props) => {
      if (!props.hasOwnProperty('answer')) {
        props.dispatch(handleSaveAnswer(this.props.user, this.props.questionId, answer));
      }
    };

    const RedirectToQuestionDetails = questionID => {
      this.setState({ redirect: true })
    };

    const { classes } = this.props;
    let optionOne = null;
    let optionTwo = null;
    if (this.props.optionOne !== undefined && this.props.optionTwo !== undefined) {
      optionOne = this.props.optionOne.text;
      optionTwo = this.props.optionTwo.text;
    }
    let correctAnswerOptionOne,
      correctAnswerOptionTwo = null;

    if (this.props.hasOwnProperty('answer')) {
      if (this.props.answer === 'optionOne') {
        correctAnswerOptionOne = { color: 'white', backgroundColor: 'blue' };
        correctAnswerOptionTwo = {};
      } else if (this.props.answer === 'optionTwo') {
        correctAnswerOptionOne = {};
        correctAnswerOptionTwo = { color: 'white', backgroundColor: 'blue' };
      }
    }
    const optionOneVotes = this.props.optionOne.votes.length;
    const optionTwoVotes = this.props.optionTwo.votes.length;
    const route = '\\question\\:' + this.props.questionID;
    
    if (this.state.redirect) {
      return <Redirect to={`/question/:${this.props.questionId}`} />
    }

    return (
      <div>
        <Card
          className={classes.card}
          onClick={() => RedirectToQuestionDetails(this.props.questionId)}
        >
          <CardContent>
            <Typography variant="headline" component="h2">
              Would you rather?
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: 'center', textAlign: 'center' }}
          >
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              style={correctAnswerOptionOne}
              onClick={() => questionAnswered('optionOne', this.props)}
            >
              {optionOne}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              style={correctAnswerOptionTwo}
              onClick={() => questionAnswered('optionTwo', this.props)}
            >
              {optionTwo}
            </Button>
          </CardActions>
          <p>
            Option One votes: {optionOneVotes}, Option Two votes:{' '}
            {optionTwoVotes}
          </p>
        </Card>
      </div>
    );
  }
}

const QuestionWithStyles = withStyles(styles)(Question);

const mapDispatchToProps = dispatch => {
  return dispatch;
};

export default connect(mapDispatchToProps)(QuestionWithStyles);
