import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestionAnswer } from '../utils/_DATA';

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

function saveAnswer({ authedUser, qid, answer }) {
	return {
		type: SAVE_ANSWER,
		authedUser,
		qid,
		answer,
	};
}

export function handleSaveAnswer(info) {
	return (dispatch) => {
		return _saveQuestionAnswer(info).then(() => {
			dispatch(saveAnswer(info));
		});
	};
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}
