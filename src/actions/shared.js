import { getInitialData } from './../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = null;

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions, id }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
}
