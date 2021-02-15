import React, { useState } from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { handleSaveAnswer } from './../actions/questions';

function Question(props) {
  const { question, user, id, authedUser } = props;
  const { optionOne, optionTwo } = question;
  const { name, avatarURL, answers } = user;
  const [answer, setAnswer] = useState('');

  const history = useHistory();
  const qid = question.id;
  console.log(question);
  console.log(user);
  console.log(answers);
  console.log(authedUser);
  console.log(qid);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const answer = e.target['questions']['value'];

    console.log(authedUser);
    console.log(answer);

    props.handleSaveAnswer({ authedUser, answer, qid });

    history.push(`/answer/${id}`);
  };
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <Card className='mb-5 p-3  w-sm mx-auto '>
        <div className='d-flex flex-row'>
          <img src={avatarURL} alt={`avatar of ${name}`} className='avatar' />
          <p className='ml-4 mt-4 text'>{name} asked</p>
        </div>

        <h5 className='text-center'>Would you rather?</h5>

        <CardContent className='justify-content-center d-flex'>
          <Form onSubmit={handleSubmit}>
            <Form.Check
              type='radio'
              label={optionOne.text}
              name='questions'
              checked={answer === 'optionOne'}
              value='optionOne'
              onChange={handleChange}
            />
            <Form.Check
              type='radio'
              label={optionTwo.text}
              name='questions'
              checked={answer === 'optionTwo'}
              value='optionTwo'
              onChange={handleChange}
            />
            <div className='text-center'>
              <Button className='mt-3' type='submit' disabled={answer === ''}>
                Submit
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions ? questions[id] : null;
  const user = question ? users[question.author] : {};

  console.log(question.id);
  console.log(users);
  return {
    // users: users[question.author],
    question,
    user,
    id,
    authedUser,
  };
}
const mapDispatchToProps = (dispatch) => ({
  handleSaveAnswer: (answer) => dispatch(handleSaveAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
