import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import NavComp from './Nav';
import TabsComp from './Tabs';
import ViewPollAnswer from './ViewPollAnswer';

function Answered(props) {
	const { questionsID, authedUserAnswersID } = props;

	//   function to seperate unanswered questions
	const filterAnswer = (questionsID, authedUserAnswersID) => {
		const filtered = questionsID.filter((el) => {
			return authedUserAnswersID.indexOf(el) !== -1;
		});
		return filtered;
	};
	// console.log(questionsID);
	// console.log(authedUserAnswersID);
	// console.log(filterAnswer(questionsID, authedUserAnswersID));
	return (
		<>
			<NavComp />
			<Container>
				<TabsComp />
				<div className='mt-3'>
					{filterAnswer(questionsID, authedUserAnswersID).map((id) => (
						<ViewPollAnswer key={id} id={id} />
					))}
				</div>
			</Container>
		</>
	);
}
const mapStateToProps = ({ questions, users, authedUser }) => {
	const authedUserID = authedUser === null ? {} : users[authedUser].answers;
	// console.log(authedUserID);
	// console.log(users);
	// console.log(authedUser);
	return {
		questionsID: Object.keys(questions).sort(
			(a, b) => questions[b].timestamp - questions[a].timestamp
		),
		users: Object.entries(users),
		authedUser: users[authedUser],
		authedUserAnswersID: Object.keys(authedUserID),
	};
};

export default connect(mapStateToProps)(Answered);
