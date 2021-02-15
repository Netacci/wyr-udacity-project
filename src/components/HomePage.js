import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import NavComp from './Nav';
import Unanswered from './Unanswered';
import TabsComp from './Tabs';

class HomePage extends Component {
	componentDidUpdate() {
		this.setState({});
	}

	render() {
		return (
			<>
				<NavComp />
				<Container>
					<TabsComp />
					<Unanswered />
				</Container>
			</>
		);
	}
}

// function HomePage() {

// 	return (
// 		<>
// 			<NavComp />
// 			<Container>
// 				<TabsComp />
// 				<Unanswered />
// 			</Container>
// 		</>
// 	);
// }

export default HomePage;
