import React, {useState} from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { formatQuestion } from './../utils/helper';
import Card from '@material-ui/core/Card';

function Question(props) {
	const { question } = props;
	const { name, avatarURL, optionOne, optionTwo, id } = question;
	const [checked, setChecked] = useState(false)
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/question/${id}`);
	};
	const handleChange=(e)=>{
		
		
		setChecked(true)
	}

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
						<Form.Check type='radio' label={optionOne.text} name='questions' checked={checked} value='optionOne' onChange={handleChange} />
						<Form.Check type='radio' label={optionTwo.text} name='questions' checked={checked} value='optionTwo' onChange={handleChange}/>
						<div className='text-center'>
							<Button className='mt-3' type='submit' disabled={checked===false}>
								Submit
							</Button>
						</div>
					</Form>
				</CardContent>
			</Card>
		</>
	);
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	console.log(question);
	console.log(users);
	return {
		// users: users[question.author],
		question: formatQuestion(question, users[question.author]),
	};
}

export default connect(mapStateToProps)(Question);
