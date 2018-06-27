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
      // const { userID, questionID, option } = action;
      // return {
      //   ...state,
      //   [userID]: {
      //     ...state[userID],
      //     answers: {
      //       ...state[userID]['answers'],
      //       [questionID]: option
      //     }
      //   }
      // }
      return {
        ...state
      }

      case DELETE_ANSWER:
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            answers: state[action.authedUser].answers.filter(answer => answer.id !== action.questionId)
          }
        }

    default:
      return state;
  }
}
