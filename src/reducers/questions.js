import { RECEIVE_QUESTIONS, ADD_QUESTION } from './../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			const { optionOne } = action;
			return {
				...state,
				[action.optionOne.id]: action.optionOne,
			};
		default:
			return state;
	}
}
