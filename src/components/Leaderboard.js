import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

let LeaderBoard = props => {
  const { users, classes } = props;
  const sumQuestionAndAnswer = user => {
    return user.questions.length + Object.keys(user.answers).length;
  };

  const sortedUsers = Object.keys(users)
    .map(id => users[id])
    .sort((a, b) => sumQuestionAndAnswer(b) - sumQuestionAndAnswer(a));
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Number of Questions Asked</TableCell>
            <TableCell>Number of Questions Answered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sortedUsers.map(user => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{sortedUsers.indexOf(user) + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.questions.length}</TableCell>
                  <TableCell>{Object.values(user.answers).length}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

LeaderBoard = withStyles(styles)(LeaderBoard);

export default connect(mapStateToProps)(LeaderBoard);
