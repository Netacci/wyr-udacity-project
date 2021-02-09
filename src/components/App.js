import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import HomePage from './HomePage';
import CreateQuestion from './CreateQuestion';
import LoadingBar from 'react-redux-loading';
import SignIn from './SignIn';
import LeaderBoard from './LeaderBoard';
import { ValueProvider } from './ValueContext';
import ErrorPage from './ErrorPage';
import PrivateRoute from './PrivateRoute';

function App(props) {
	useEffect(() => {
		props.fetchAll();
	}, []);
	return (
		<Router>
			<div>
				<LoadingBar />
				<ValueProvider>
					<Switch>
						<PrivateRoute exact path='/' component={HomePage} />
						<PrivateRoute path='/add' component={CreateQuestion} />
						<PrivateRoute path='/leaderboard' component={LeaderBoard} />
						<Route path='/signin' component={SignIn} />
						<Route component={ErrorPage} />
					</Switch>
				</ValueProvider>
			</div>
		</Router>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: () => dispatch(handleInitialData()),
	};
};

export default connect(null, mapDispatchToProps)(App);
