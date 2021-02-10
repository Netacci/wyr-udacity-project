import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { useContext } from 'react';
import { ValueContext } from '../contexts/ValueContext';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(optionOne) {
	return {
		type: ADD_QUESTION,
		optionOne,
	};
}

export function handleAddQuestion(text) {
	return (dispatch) => {
		dispatch(showLoading());
		return saveQuestion({
			text,
		}).then((optionOne) => dispatch(addQuestion(optionOne)));
	};
}

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}
