import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Question from './Question';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

let UnansweredQuestions = props => {
  const { classes } = props;
  const questionDetails = Object.values(props.questions);
  const details = questionDetails.filter(question =>
    props.unanswered.includes(question.id)
  );

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
                user={props.user}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(UnansweredQuestions);
