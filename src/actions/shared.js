import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import recieveUsers from './users';
import recieveQuestions from './questions';
import setAuthedUser from './authedUser';

export const ADD_ANSWER = 'ADD_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

const addAnswer = answer => {
  return {
    type: ADD_ANSWER,
    ...answer
  };
};

const deleteAnswer = answer => {
  return {
    type: DELETE_ANSWER,
    ...answer
  };
};

const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    ...question
  };
};

export const handleAddQuestion = question => {
  return dispatch => {
    dispatch(addQuestion(question));
  };
};

export const handleInitialData = user => {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(user));
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
};

export const handleSaveAnswer = (authedUser, questionId, option) => {
  return dispatch => {
    dispatch(addAnswer({ authedUser, questionId, option }));
    return saveQuestionAnswer(authedUser, questionId, option).catch(() =>
      dispatch(deleteAnswer({ authedUser, questionId, option }))
    );
  };
};
