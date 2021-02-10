import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ValueContext } from '../contexts/ValueContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignIn = (props) => {
	const [value, setValue] = useContext(ValueContext);
	const [users, setUsers] = useContext(ValueContext);
	const [error, setError] = useState('');
	const history = useHistory();
	console.log(value);

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError('');
			await setUsers(value);
			console.log(users);
			history.push('/');
		} catch {
			setError('failed lo log');
		}
	}
	console.log(users);

	const handleChange = (e) => {
		console.log(value);
		console.log(e.target.value);
		setValue(e.target.value);
		console.log(value);
	};

	return (
		<div className=' px-md-0 py-md-0'>
			<h3 className='mt-4 p-5 text-center'>Would you Rather? </h3>
			<Form
				onSubmit={handleSubmit}
				className='form col-12 col-md-7 col-lg-5 mx-auto mt-5  pt-4 pt-md-5 px-lg-5'
			>
				<h3 className=' text-center mt-3 '>Sign In to play</h3>
				{
					<Form.Control
						as='select'
						defaultValue='Please select user'
						onChange={handleChange}
						className='mt-4'
					>
						<option disabled>Please select user</option>
						{props.users.map((user) => (
							<option key={user}>{user[0]}</option>
						))}
					</Form.Control>
				}
				<div className='text-center'>
					<Button className='mt-4 mb-5' variant='primary' type='submit'>
						Sign In
					</Button>
				</div>
			</Form>
		</div>
	);
};

const mapStateToProps = ({ users }, { id }) => {
	console.log(users);
	return {
		users: Object.entries(users),
	};
};

export default connect(mapStateToProps)(SignIn);
