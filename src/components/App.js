import React, { useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import HomePage from './HomePage';
import CreateQuestion from './CreateQuestion';
import LoadingBar from 'react-redux-loading';
import SignIn from './SignIn';
import LeaderBoard from './LeaderBoard';
import { ValueProvider } from '../contexts/ValueContext';
import ErrorPage from './ErrorPage';
import PrivateRoute from './PrivateRoute';
import AnsweredQuestion from './AnsweredQuestion';
import Answered from './Answered';
import Unanswered from './Unanswered';
import UnansweredQuestion from './UnansweredQuestion';

class App extends Component {
	componentDidMount() {
		this.props.fetchAll();
		this.forceUpdate();
	}

	render() {
		return (
			<Router>
				<div>
					<LoadingBar />
					<ValueProvider>
						<Switch>
							<PrivateRoute exact path='/' component={HomePage} />
							<PrivateRoute
								exact
								path='/question/:id'
								component={UnansweredQuestion}
							/>
							<PrivateRoute
								exact
								path='/answer/:id'
								component={AnsweredQuestion}
							/>
							<PrivateRoute path='/add' component={CreateQuestion} />
							<PrivateRoute path='/unanswered' component={Unanswered} />
							<PrivateRoute path='/answered' component={Answered} />
							<PrivateRoute path='/leaderboard' component={LeaderBoard} />
							<Route path='/signin' component={SignIn} />
							<Route component={ErrorPage} />
						</Switch>
					</ValueProvider>
				</div>
			</Router>
		);
	}
}

// export default App;

// function App(props) {
//   useEffect(() => {
//     props.fetchAll();
//   }, [props]);
//   return (
//     <Router>
//       <div>
//         <LoadingBar />
//         <ValueProvider>
//           <Switch>
//             <PrivateRoute exact path='/' component={HomePage} />
//             <PrivateRoute
//               exact
//               path='/question/:id'
//               component={UnansweredQuestion}
//             />
//             <PrivateRoute
//               exact
//               path='/answer/:id'
//               component={AnsweredQuestion}
//             />
//             <PrivateRoute path='/add' component={CreateQuestion} />
//             <PrivateRoute path='/unanswered' component={Unanswered} />
//             <PrivateRoute path='/answered' component={Answered} />
//             <PrivateRoute path='/leaderboard' component={LeaderBoard} />
//             <Route path='/signin' component={SignIn} />
//             <Route component={ErrorPage} />
//           </Switch>
//         </ValueProvider>
//       </div>
//     </Router>
//   );
// }

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => dispatch(handleInitialData()),
	};
};

export default connect(null, mapDispatchToProps)(App);
