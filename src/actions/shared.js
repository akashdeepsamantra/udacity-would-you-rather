import { getInitialData } from '../utils/api'
import recieveUsers from './users'
import recieveQuestions from './questions'
import setAuthedUser from './authedUser'

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(recieveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(setAuthedUser('tylermcginnis'))
      }) 
  }
}
