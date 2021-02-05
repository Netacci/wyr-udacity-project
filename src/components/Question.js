import { connect } from 'react-redux';
import React from 'react';

// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function Question(props) {
	const { question, users } = props;
	const { optionOne, optionTwo, timestamp } = question;
	// const {text, votes} = optionOne
	const { name, avatarURL } = users;

	return (
	<>
            <img src={avatarURL} alt={`avatar of ${name}`} className='avatar'/>
		<p>{name}</p>
        <p>{timestamp}</p>
			
			
		
      
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					<Button color='primary'>{optionOne.text}</Button>
					<Button color='secondary'>{optionTwo.text}</Button>
				</Typography>
			</CardContent>
	</>
		// <div>
		// 	<img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />

		//     <p>{name}</p>
		//     <p>{optionOne.text}</p>
		//     <p>{optionTwo.text}</p>
		// </div>
	);
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];
	console.log(question);
	return {
		users: users[question.author],
		question: question,
	};
}

export default connect(mapStateToProps)(Question);
