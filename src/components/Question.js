import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import { handleSaveAnswer } from '../actions/shared'

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

const questionAnswered = (answer, props) => {
  if (!props.hasOwnProperty('answer')) {
    props.dispatch(handleSaveAnswer(props.user, props.questionId, answer));
  }
};

const Question = props => {
  const { classes } = props;
  let optionOne = null;
  let optionTwo = null;
  if (props.optionOne !== undefined && props.optionTwo !== undefined) {
    optionOne = props.optionOne.text;
    optionTwo = props.optionTwo.text;
  }
  let correctAnswerOptionOne,
    correctAnswerOptionTwo = null;

  if (props.hasOwnProperty('answer')) {
    if (props.answers === 'optionOne') {
      correctAnswerOptionOne = { color: 'white', backgroundColor: 'blue' };
      correctAnswerOptionTwo = {};
    } else {
      correctAnswerOptionOne = {};
      correctAnswerOptionTwo = { color: 'white', backgroundColor: 'blue' };
    }
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Would you rather?
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            style={correctAnswerOptionOne}
            onClick={() => questionAnswered('optionOne', props)}
          >
            {optionOne}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            style={correctAnswerOptionTwo}
            onClick={() => questionAnswered('optionTwo', props)}
          >
            {optionTwo}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const QuestionWithStyles = withStyles(styles)(Question)

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

export default connect(mapDispatchToProps)(QuestionWithStyles);
