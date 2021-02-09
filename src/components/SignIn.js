import React, { useContext } from 'react';
import { connect } from 'react-redux';
import {  useHistory } from "react-router-dom"
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
    const [users, setUsers] = useContext(ValueContext)
    const history = useHistory()
    console.log(value)


    const handleChange =(e)=>{
      
        console.log(e.target.value)
        setValue(e.target.value);
       
    }

    const handleSubmit = (e) => {
     
     
       history.push("/")
 
		e.preventDefault();

	};


	return (
		<form onSubmit={handleSubmit}>

            {

                        <select onChange={handleChange} value={value}  >

                            {props.users.map((user) => (

                            <option key={user}>{user[0]}</option>

                            ))}
                        </select>

				}
                <button type='submit'>Sign In</button>

		</form>
	);
}


const mapStateToProps = ({ users }, {id}) => {
    console.log(users)
	return {
		users : Object.entries(users)

	};
};

export default connect(mapStateToProps)(SignIn)
