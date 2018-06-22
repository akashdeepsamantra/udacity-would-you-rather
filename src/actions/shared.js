import { getInitialData } from '../utils/api'
import recieveUsers from './users'
import recieveQuestions from './questions'
import setAuthedUser from './authedUser'

export const handleInitialData = (user) => {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(setAuthedUser(user))
        dispatch(recieveUsers(users))
        dispatch(recieveQuestions(questions))
      }) 
  }
}
