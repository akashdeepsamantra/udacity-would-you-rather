import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import UnansweredQuestions from './UnansweredQuestion';
import AnsweredQuestions from './AnsweredQuestion';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    loading: true,
    value: 0
  };

  componentDidMount() {
    if (this.props.users != null) {
      this.setState({ loading: false });
    }
  }

  handleChange(event, value) {
    this.setState({ value: value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme = {theme}>
        <Paper position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </Paper>
        {value === 0 && (
          <TabContainer>
            <UnansweredQuestions
              user={this.props.authedUser}
              questions={this.props.questions}
              unanswered={this.props.unansweredQuestions}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <AnsweredQuestions
              user={this.props.authedUser}
              questions={this.props.questions}
              answered={this.props.answeredQuestions}
              users = {this.props.users}
            />
          </TabContainer>
        )}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const user =
    authedUser && users.hasOwnProperty(authedUser)
      ? users[authedUser]
      : { answers: {} };

  const answeredQuestions = questionIds.filter(question =>
    user.answers.hasOwnProperty(question)
  );
  const unansweredQuestions = questionIds.filter(
    question => !answeredQuestions.includes(question)
  );

  return {
    answeredQuestions,
    unansweredQuestions,
    questions,
    users,
    authedUser
  };
};

const QuestionListWithStyles = withStyles(styles)(QuestionList);

export default connect(mapStateToProps)(QuestionListWithStyles);
