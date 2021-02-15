import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavComp from './Nav';
import TabsComp from './Tabs';
import ViewPollAnswer from './ViewPollAnswer';

class Answered extends Component {
	componentDidMount() {
		this.forceUpdate();
	}
	filterAnswer = (questionsID, authedUserAnswersID) => {
		const filtered = questionsID.filter((el) => {
			return authedUserAnswersID.indexOf(el) !== -1;
		});
		return filtered;
	};
	render() {
		const { questionsID, authedUserAnswersID } = this.props;
		return (
			<>
				<NavComp />

				<Container>
					<TabsComp />
					<div className='mt-3'>
						{this.filterAnswer(questionsID, authedUserAnswersID).map((id) => (
							<ViewPollAnswer key={id} id={id} />
						))}
						{/* {props.questionsID.map((id) => (
						<Question key={id} id={id}></Question>
					))} */}
					</div>
				</Container>
			</>
		);
	}
}

// export default Answered;

// function Answered(props) {
//   const { answeredq } = props;

//   // function to seperate unanswered questions
//   // const filterAnswer = (questionsID, authedUserAnswersID) => {
//   //   const filtered = questionsID.filter((el) => {
//   //     return authedUserAnswersID.indexOf(el) !== -1;
//   //   });
//   //   return filtered;
//   // };
//   // console.log(questionsID);
//   // console.log(authedUserAnswersID);
//   // console.log(filterAnswer(questionsID, authedUserAnswersID));
//   return (
//     <>
//       <NavComp />

//       <Container>
//         <TabsComp />
//         <div className='mt-3'>
//           {answeredq.map((id) => (
//             <ViewPollAnswer key={id} id={id} />
//           ))}
//           {/* {props.questionsID.map((id) => (
// 						<Question key={id} id={id}></Question>
// 					))} */}
//         </div>
//       </Container>
//     </>
//   );
// }
const mapStateToProps = ({ questions, users, authedUser }) => {
	// const questionsID = Object.keys(questions).sort(
	// 	(a, b) => questions[b].timestamp - questions[a].timestamp
	// );
	const authedUserID = authedUser === null ? {} : users[authedUser].answers;
	// let authedUserAnswer = authedUserID ? Object.keys(authedUserID) : [];
	// authedUserAnswer = questionsID.filter((qid) =>
	// 	authedUserAnswer.includes(qid)
	// );

	console.log(authedUserID);
	console.log(users);
	console.log(authedUser);
	return {
		questionsID: Object.keys(questions).sort(
			(a, b) => questions[b].timestamp - questions[a].timestamp
		),
		users: Object.entries(users),
		authedUser: users[authedUser],
		// questions: Object.keys(questions),
		// answeredq: authedUserAnswer,
		authedUserAnswersID: Object.keys(authedUserID),
	};
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchAll: () => dispatch(handleInitialData()),
//   };
// };

export default connect(mapStateToProps)(Answered);
