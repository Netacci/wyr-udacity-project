import React from 'react';
import NavComp from './Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Card from '@material-ui/core/Card';

function CreateQuestion(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    // make sure the variable name matches the one in formatted question in data.js
    const optionOneText = e.target['textOne']['value'];
    const optionTwoText = e.target['textTwo']['value'];
    // store authedUser in a variable called author(data.js accepts question.author)
    const author = props.authedUser;

    if (optionOneText === '' || optionTwoText === '') {
      return false;
    }

    props.handleAddQuestion({ optionOneText, optionTwoText, author });
    history.push('/');
  };
  console.log(props.users);

  const user = props.users[props.authedUser];
  console.log(user);
  const { name, avatarURL } = user;

  return (
    <div>
      <NavComp />
      <div>
        <Card className='mt-5 col-7 mx-auto '>
          <div className='d-flex flex-row justify-content-center'>
            <img src={avatarURL} alt={`avatar of ${name}`} className='avatar' />
            <p className='ml-4 mt-4 text'>{name}</p>
          </div>

          <h3 className='text-center mt-4'>Would you rather?</h3>
          <Form
            className='col-12 col-md-7 col-lg-6 mx-auto mt-4  pt-4 pt-md-5 px-lg-5'
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Option One'
                name='textOne'
              />
            </Form.Group>

            <p className='text-center'>OR</p>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Option Two'
                name='textTwo'
              />
            </Form.Group>
            <div className='text-center'>
              <Button className='mt-4 mb-4' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    authedUser: state.authedUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleAddQuestion: (q) => dispatch(handleAddQuestion(q)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
