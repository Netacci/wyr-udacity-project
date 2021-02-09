import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ValueContext } from './ValueContext';


// class SignIn extends Component {
// 	state = {
// 		users: ['sarahedo', 'tylermcginnis', 'johndoe'],
//         value : 'sarahedo'
// 	};

// 	handleChange = (e) => {
// 		e.preventDefault();
//         this.setState({
//             value: e.target.value

//         })

// 	};

// 	handleSubmit = (e) => {

//        alert(this.state.value)

//        e.preventDefault();

// 	};

// 	render() {
//         export const AUTHED_ID = this.state.value
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				{
// 					<select onChange={this.handleChange} value={this.state.value}>
// 						{this.state.users.map((user) => (
// 							<option key={user} >
// 								{user}
// 							</option>
// 						))}
// 					</select>
// 				}
// 				<button type='submit'>Sign In</button>
// 			</form>
// 		);
// 	}
// }

// export default SignIn;

const SignIn = (props) => {
	const [value, setValue] = useContext(ValueContext);
	const [users, setUsers] = useContext(ValueContext);
	const [error, setError] = useState('');
	const history = useHistory();
	console.log(value);

    async function handleSubmit(e, tag) {
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
		<form onSubmit={handleSubmit}>
			{
				<select onChange={handleChange} value={value}>
                    <option selected disabled>Please select user</option>
					{props.users.map((user) => (
						<option key={user}>{user[0]}</option>
					))}
				</select>
			}
			<button type='submit'>Sign In</button>
		</form>
	);
};

const mapStateToProps = ({ users }, { id }) => {
	console.log(users);
	return {
		users: Object.entries(users),
	};
};

export default connect(mapStateToProps)(SignIn);
