import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

function Poll(props) {
	const id = props.id;
	const user = props.users[id];
	console.log(props.id);
	console.log(props.users);
	console.log(props.users[id]);
	console.log(user);

	return (
		<>
			<Card className='mb-5 p-3  w-50 mx-auto '>
				<div className='d-flex flex-row'>
					<img
						src={user.avatarURL}
						alt={`avatar of ${user.name}`}
						className='avatar'
					/>
					<p className='ml-4 mt-4 text'>{user.name}</p>
				</div>
				<p>Answered Questions : {Object.keys(user.answers).length}</p>
				<p> Created Questions: {user.questions.length}</p>
				<p>
					Total Score:{' '}
					{user.questions.length + Object.keys(user.answers).length}
				</p>
			</Card>
		</>
	);
}

function mapStateToProps(state) {
	return {
		users: state.users,
	};
}

export default connect(mapStateToProps)(Poll);
