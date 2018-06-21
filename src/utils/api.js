import { 
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
 } from './_Data'

 export const getUser = () => {
   return _getUsers()
 }

 export const getQuestions = () => {
   return _getQuestions()
 }

 export const saveQuestion = (question) => {
  return _saveQuestion(question)
 }

 export const saveQuestionAnswer = (authedUser, qid, answer) => {
   return _saveQuestionAnswer({ authedUser, qid, answer })
 }