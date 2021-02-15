import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import ViewPoll from './ViewPoll';

function Unanswered(props) {
  console.log(props.questionsID);
  const { users, authedUser, questions, answeredq } = props;
  console.log(users);
  console.log(authedUser);
  console.log(authedUser.answers);
  //   console.log(authedUserAnswersID);
  // function to seperate unanswered questions
  //   const filterAnswer = (questionsID, authedUserAnswersID) => {
  //     const filtered = questionsID.filter((el) => {
  //       return authedUserAnswersID.indexOf(el) === -1;
  //     });
  //     return filtered;
  //   };
  //   console.log(filterAnswer(questionsID, authedUserAnswersID));
  console.log(questions);

  return (
    <>
      <Container>
        <div className='mt-3'>
          {answeredq.map((id) => (
            <ViewPoll key={id} id={id} />
          ))}
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  //   const authedUserID = authedUser === null ? {} : users[authedUser].answers;
  const questionsID = Object.keys(state.questions).sort(
    (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
  );
  const authedUserID =
    state.authedUser === null ? {} : state.users[state.authedUser].answers;
  let authedUserAnswer = authedUserID ? Object.keys(authedUserID) : [];
  authedUserAnswer = questionsID.filter(
    (qid) => !authedUserAnswer.includes(qid)
  );

  console.log(authedUserID);
  console.log(state.users);
  console.log(state.authedUser);
  return {
    // questionsID: Object.keys(questions).sort(
    //   (a, b) => questions[b].timestamp - questions[a].timestamp
    // ),
    users: state.users,
    authedUser: state.authedUser,
    questions: questionsID,
    // authedUserAnswersID: Object.keys(authedUserID),
    answeredq: authedUserAnswer,
  };
};

export default connect(mapStateToProps)(Unanswered);
