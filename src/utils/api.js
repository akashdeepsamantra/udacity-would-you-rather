import { 
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
 } from './_Data'

export const getInitialData = () => {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  })) 
}

export const getUsers = () => {
  return _getUsers()
}

 export const saveQuestion = (question) => {
  return _saveQuestion(question)
 }

 export const saveQuestionAnswer = (authedUser, qid, answer) => {
   return _saveQuestionAnswer({ authedUser, qid, answer })
 }