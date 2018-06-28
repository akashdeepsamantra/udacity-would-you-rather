import { RECIEVE_USERS } from '../actions/users';
import { ADD_ANSWER, DELETE_ANSWER, ADD_QUESTION } from '../actions/shared';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users
      };

    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser]['answers'],
            [action.questionId]: action.option
          }
        }
      };

    case DELETE_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: state[action.authedUser].answers.filter(
            answer => answer.id !== action.questionId
          )
        }
      };

    case ADD_QUESTION: {
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    }

    default:
      return state;
  }
}
