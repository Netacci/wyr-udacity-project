import { getInitialData } from './../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(setAuthedUser());
			dispatch(hideLoading());
		});
	};
}

// export const fetchAll = () => async (dispatch) => {
// 	try {
// 		dispatch(handleInitialData());
// 	} catch (error) {
// 		console.log('could not fetch');
// 	}
// };
