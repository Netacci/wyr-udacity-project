import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import ViewPoll from './ViewPoll';

function Unanswered(props) {
	console.log(props.questionsID);
	const { users, authedUser, authedUserAnswersID, questionsID } = props;
	console.log(users);
	console.log(authedUser);
	console.log(authedUser.answers);
	console.log(authedUserAnswersID);
	// function to seperate unanswered questions
	const filterAnswer = (questionsID, authedUserAnswersID) => {
		const filtered = questionsID.filter((el) => {
			return authedUserAnswersID.indexOf(el) === -1;
		});
		return filtered;
	};
	console.log(filterAnswer(questionsID, authedUserAnswersID));

	return (
		<>
			<Container>
				<div className='mt-3'>
					{filterAnswer(questionsID, authedUserAnswersID).map((id) => (
						<ViewPoll key={id} id={id} />
					))}
				</div>
			</Container>
		</>
	);
}

const mapStateToProps = ({ questions, users, authedUser }) => {
	const authedUserID = authedUser === null ? {} : users[authedUser].answers;
	console.log(authedUserID);
	console.log(users);
	console.log(authedUser);
	return {
		questionsID: Object.keys(questions).sort(
			(a, b) => questions[b].timestamp - questions[a].timestamp
		),
		users: Object.entries(users),
		authedUser: users[authedUser],
		authedUserAnswersID: Object.keys(authedUserID),
	};
};

export default connect(mapStateToProps)(Unanswered);
