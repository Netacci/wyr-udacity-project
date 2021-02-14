import React from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Question(props) {
  const {
    question,
    user,
    id,
    users,
    authedUser,
    authedUserAnswersID,
    questionsID,
  } = props;
  const { optionOne, optionTwo } = question;
  const { name, avatarURL } = user;
  console.log(authedUser.id);
  console.log(authedUserAnswersID);
  console.log(questionsID);

  return (
    <>
      <Card key={id} className='mb-5 p-3  w-50 mx-auto '>
        <div className='d-flex flex-row'>
          <img src={avatarURL} alt={`avatar of ${name}`} className='avatar' />
          <p className='ml-4 mt-4 text'>Asked by {name}</p>
        </div>

        <h5 className='text-center'>Results:</h5>

        <CardContent className='d-flex flex-column text-center'>
          <Card
            style={
              optionOne.votes.includes(authedUser.id)
                ? { backgroundColor: '#5ebb5e' }
                : { backgroundColor: 'none' }
            }
            className='mb-5 p-3  w-50 mx-auto'
          >
            <p>{optionOne.votes.includes(authedUser.id) ? 'Your Vote' : ''} </p>
            <p>{optionOne.text}</p>
            <p>{`${optionOne.votes.length} out of ${users.length} votes`}</p>
            <ProgressBar
              now={Math.round((optionOne.votes.length / users.length) * 100)}
              label={`${Math.round(
                (optionOne.votes.length / users.length) * 100
              )}%`}
            />
          </Card>
          <Card
            style={
              optionTwo.votes.includes(authedUser.id)
                ? { backgroundColor: '#5ebb5e' }
                : { backgroundColor: 'none' }
            }
            className='mb-5 p-3  w-50 mx-auto'
          >
            <p>{optionTwo.votes.includes(authedUser.id) ? 'Your Vote' : ''} </p>
            <p>{optionTwo.text}</p>
            <p>{`${optionTwo.votes.length} out of ${users.length} votes`}</p>

            <ProgressBar
              now={Math.round((optionTwo.votes.length / users.length) * 100)}
              label={`${Math.round(
                (optionTwo.votes.length / users.length) * 100
              )}%`}
            />
          </Card>
        </CardContent>
      </Card>
    </>
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const authedUserID = authedUser === null ? {} : users[authedUser].answers;

  const question = questions ? questions[id] : null;
  const user = question ? users[question.author] : {};

  console.log(question);
  console.log(users);
  return {
    // users: users[question.author],
    question,
    user,
    id,
    users: Object.entries(users),
    authedUser: users[authedUser],
    questionsID: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUserAnswersID: Object.keys(authedUserID),
  };
}

export default connect(mapStateToProps)(Question);
