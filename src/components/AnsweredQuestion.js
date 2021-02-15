import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import NavComp from './Nav';

function AnsweredQuestion(props) {
  console.log(props);
  return (
    <>
      <NavComp />
      <Answer id={props.id} />
    </>
  );
}

function mapStateToProps({ authedUser, tweets, users, questions }, props) {
  const { id } = props.match.params;

  return {
    id,
  };
}
export default connect(mapStateToProps)(AnsweredQuestion);
