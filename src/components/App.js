import React, { useEffect } from 'react';
import NavComp from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import HomePage from './HomePage';

function App(props) {
	useEffect(() => {
		props.fetchAll();
	}, []);
	return (
		<Router>
			<div className='App'>
				<NavComp />
				<HomePage />
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
