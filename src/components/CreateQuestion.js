import React from 'react';
import NavComp from './Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateQuestion() {
	return (
		<div>
			<NavComp />
			<div>
				<h3 className='text-center mt-4'>Would you rather?</h3>
				<Form className='col-12 col-md-7 col-lg-5 mx-auto mt-4  pt-4 pt-md-5 px-lg-5'>
					<Form.Group>
						<Form.Control type='text' placeholder='Option One' />
					</Form.Group>

					<p className='text-center'>OR</p>
					<Form.Group>
						<Form.Control type='text' placeholder='Option Two' />
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
