import { RECEIVE_USERS } from './../actions/users';
import { SAVE_ANSWER } from './../actions/questions';

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case SAVE_ANSWER:
			const { authedUser, qid, answer } = action;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: [...state[qid][answer].votes, authedUser],
					},
				},
			};
		default:
			return state;
	}
}
