import React from 'react';
import NavComp from './Nav';
import { connect } from 'react-redux';
import Poll from './Poll';
import Container from 'react-bootstrap/Container';

function LeaderBoard(props) {
	const { users } = props;
	return (
		<>
			<NavComp />
			<Container>
				{users.map((id) => (
					<Poll key={id} id={id} />
				))}
			</Container>
		</>
	);
}

const mapStateToProps = ({ users }) => {
	return {
		users: Object.keys(users).sort(
			(a, b) =>
				Object.keys(users[b].answers).length +
				users[b].questions.length -
				(Object.keys(users[a].answers).length + users[a].questions.length)
		),
	};
};
export default connect(mapStateToProps)(LeaderBoard);
