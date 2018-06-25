import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  }
});

const Question = props => {
  const { classes } = props;
  let optionOne = null
  let optionTwo = null
  if (props.optionOne !== undefined && props.optionTwo !== undefined) {
    optionOne = props.optionOne.text
    optionTwo = props.optionTwo.text
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
          <Button variant="outlined" color="primary" className={classes.button}>
            {optionOne}
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            {optionTwo}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Question);