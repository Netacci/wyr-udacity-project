import React from 'react';
import Card from '@material-ui/core/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function ErrorPage() {
	const history = useHistory();
	const handleClick = (e) => {
		e.preventDefault();
		history.push('/');
	};
	return (
		<Container className=''>
			<Card className='mb-5 p-5 w-sm mx-auto bg text-center '>
				<p>Something went wrong!</p>
				<Button className='mt-4' onClick={handleClick}>
					Go to Sign In
				</Button>
			</Card>
		</Container>
	);
}
