import React from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

function Poll(props) {
    const id = props.id;
	const user = props.users[id];
    console.log(props.id)
    console.log(props.users)
    console.log(props.users[id])
    console.log(user)
    // console.log(answers)
    // console.log(questions)
    return (
        <>
        <Card>
        <div className='d-flex flex-row'>
					<img src={user.avatarURL} alt={`avatar of ${user.name}`} className='avatar' />
					<p className='ml-4 mt-4 text'>{user.name}</p>
				</div>
                <p>{Object.keys(user.answers).length}</p>
                <p>{user.questions.length}</p>
                <p>{user.questions.length + Object.keys(user.answers).length}</p>
        </Card>
            

        </>
    )
}


function mapStateToProps(state) {
	// const question = questions ? questions[id] : null;
	// const user = question ? users[question.author] : {};

	// console.log(question);
	// console.log(users);
	return {
		users: state.users,
	
	};
}

export default connect (mapStateToProps)(Poll)