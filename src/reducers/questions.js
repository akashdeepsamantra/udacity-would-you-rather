import { RECIEVE_QUESTIONS } from '../actions/questions'

export default function question(state = {}, action) {
  switch(action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}