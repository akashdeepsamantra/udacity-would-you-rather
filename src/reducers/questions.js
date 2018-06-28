import { RECIEVE_QUESTIONS } from '../actions/questions'
import { ADD_ANSWER, DELETE_ANSWER, ADD_QUESTION } from '../actions/shared'

export default function question(state = {}, action) {
  switch(action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.concat([action.authedUser])
          }
        }
      }
    case DELETE_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].filter(userid => userid !== action.authedUser)
          }
        }
      }
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }
    default:
      return state
  }
}