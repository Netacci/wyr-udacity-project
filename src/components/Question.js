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
	const { name, avatarURL } = user;
	const [checked, setChecked] = useState(false);
	const history = useHistory();
	console.log(question);
	console.log(user);
	console.log(authedUser);

	const handleSubmit = (e) => {
		e.preventDefault();

		const answer = e.target['questions']['value'];
		const qid = question.id;
		console.log(authedUser);
		console.log(answer);
		console.log(qid);
		props.handleSaveAnswer({ qid, answer, authedUser });
		history.push(`/answer/${id}`);
	};
	const handleChange = (e) => {
		setChecked(true);
	};

	return (
		<>
			<Card key={id} className='mb-5 p-3  w-50 mx-auto '>
				<div className='d-flex flex-row'>
					<img src={avatarURL} alt={`avatar of ${name}`} className='avatar' />
					<p className='ml-4 mt-4 text'>{name}</p>
				</div>

				<h5 className='text-center'>Would you rather?</h5>

				<CardContent className='justify-content-center d-flex'>
					<Form onSubmit={handleSubmit}>
						<Form.Check
							type='radio'
							label={optionOne.text}
							name='questions'
							checked={checked}
							value='optionOne'
							onChange={handleChange}
						/>
						<Form.Check
							type='radio'
							label={optionTwo.text}
							name='questions'
							checked={checked}
							value='optionTwo'
							onChange={handleChange}
						/>
						<div className='text-center'>
							<Button
								className='mt-3'
								type='submit'
								disabled={checked === false}
							>
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
	handleSaveAnswer: ({ qid, authedUser, answer }) =>
		dispatch(handleSaveAnswer({ qid, authedUser, answer })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
