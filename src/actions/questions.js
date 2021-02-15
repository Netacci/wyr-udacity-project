import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestionAnswer } from './../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(q) {
  return async (dispatch) => {
    dispatch(showLoading());
    const question = await saveQuestion(q);
    dispatch(addQuestion(question));
    return dispatch(hideLoading());
  };
}

function saveAnswer(ans) {
  return {
    type: SAVE_ANSWER,
    ans,
  };
}
export function handleSaveAnswer(qid, answer) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    const ans = await saveQuestionAnswer({ qid, answer, authedUser });
    dispatch(saveAnswer(ans));
    return dispatch(hideLoading());
  };
}
// export function handleSaveAnswer(answer) {
// 	return async (dispatch) => {
// 		dispatch(showLoading());
// 		await saveQuestionAnswer(answer);
// 		dispatch(saveAnswer(answer));
// 		return dispatch(hideLoading());
// 	};
// }
// export function handleSaveAnswer(answer) {
// 	return async (dispatch) => {
// 		dispatch(showLoading());
// 		const question = await saveQuestionAnswer(answer);
// 		dispatch(saveAnswer(answer));
// 		return dispatch(hideLoading());
// 	};
// }

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
