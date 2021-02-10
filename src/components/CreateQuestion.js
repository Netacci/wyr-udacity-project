import React, { useState } from 'react';
import NavComp from './Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleAddQuestion } from './../actions/questions';
import { connect } from 'react-redux';

function CreateQuestion(props) {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		const text = e.target.value;
		setText(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { dispatch } = props;
		dispatch(handleAddQuestion(text));

		setText('');
	};

	return (
		<div>
			<NavComp />
			<div>
				<h3 className='text-center mt-4'>Would you rather?</h3>
				<Form
					className='col-12 col-md-7 col-lg-5 mx-auto mt-4  pt-4 pt-md-5 px-lg-5'
					onSubmit={handleSubmit}
				>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Option One'
							onChange={handleChange}
						/>
					</Form.Group>

					<p className='text-center'>OR</p>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Option Two'
							onChange={handleChange}
						/>
					</Form.Group>
					<div className='text-center'>
						<Button className='mt-4' type='submit'>
							Submit
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default connect()(CreateQuestion);
