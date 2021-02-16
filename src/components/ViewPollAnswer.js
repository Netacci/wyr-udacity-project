import React from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';

function ViewPollAnswer(props) {
	const { question, user, id } = props;
	const { optionOne } = question;
	const { name, avatarURL } = user;
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/answer/${id}`);
	};

	return (
		<>
			<Card key={id} className='mb-5 p-3  w-sm mx-auto '>
				<div className='d-flex flex-row'>
					<img src={avatarURL} alt={`avatar of ${name}`} className='avatar' />
					<p className='ml-4 mt-4 text'>{name}</p>
				</div>

				<h5 className='text-center'>Would you rather?</h5>

				<CardContent className='justify-content-center d-flex'>
					<Form onSubmit={handleSubmit}>
						<p>...{optionOne.text}</p>
						<div className='text-center'>
							<Button className='mt-3' type='submit'>
								View Poll
							</Button>
						</div>
					</Form>
				</CardContent>
			</Card>
		</>
	);
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions ? questions[id] : null;
	const user = question ? users[question.author] : {};

	// console.log(question);
	// console.log(users);
	return {
		question,
		user,
		id,
	};
}

export default connect(mapStateToProps)(ViewPollAnswer);
