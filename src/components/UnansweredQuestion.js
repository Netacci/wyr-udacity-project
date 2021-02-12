import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import NavComp from './Nav';

function UnansweredQuestion(props) {
	console.log(props);
	return (
		<>
			<NavComp />
			<Question id={props.id} />;
		</>
	);
}

function mapStateToProps({ authedUser, tweets, users, questions }, props) {
	const { id } = props.match.params;

	return {
		id,
	};
}
export default connect(mapStateToProps)(UnansweredQuestion);
