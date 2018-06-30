import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Question from './Question';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const AnsweredQuestions = props => {
  const { classes, users } = props;
  const questionDetails = Object.values(props.questions);
  const details = questionDetails.filter(question =>
    props.answered.includes(question.id)
  );
  const answers = users[props.user].answers;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {details.map(question => {
          return (
            <Grid item xs={12} sm={6} key={question.id}>
              <Question
                questionId={question.id}
                optionOne={question.optionOne}
                optionTwo={question.optionTwo}
                answer={answers[question.id]}
              />
            </Grid>
          );
        })}
      </Grid>
      <p style={{ textAlign: 'right', color: 'red' }}>
        Note: Correct answered are in blue color
      </p>
    </div>
  );
};

export default withStyles(styles)(AnsweredQuestions);
