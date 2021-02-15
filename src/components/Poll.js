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
      <Card className='mb-5 p-3 w-sm mx-auto '>
        <div className='d-flex flex-row mt-4'>
          <img
            src={user.avatarURL}
            alt={`avatar of ${user.name}`}
            className='avatar'
          />
          <p className='ml-4 mt-4 text'>{user.name}</p>
        </div>
        <div className='row justify-content-around mt-3'>
          <div>
            <p>Answered Questions : {Object.keys(user.answers).length}</p>
            <p> Created Questions: {user.questions.length}</p>
          </div>
          <div className='score'>
            <p className=''>Total Score: </p>
            <p className='text-lg'>
              {user.questions.length + Object.keys(user.answers).length}
            </p>
          </div>
        </div>
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
