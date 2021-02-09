import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import { Link, useHistory } from 'react-router-dom';

import { ValueContext } from './ValueContext';

function NavComp() {
	const [value, setValue] = useContext(ValueContext);
	const [users, setUsers] = useContext(ValueContext);
	const history = useHistory();

	function handleLogout() {
		console.log(users);
		setUsers([]);
		history.push('/signin');
	}

	console.log(users);
	return (
		<>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
							<NavLink
								to='/'
								exact
								activeClassName='active'
								className='nav-link'
							>
								Home
							</NavLink>

							<NavLink
								className='ml-5 nav-link'
								to='/add'
								exact
								activeClassName='active'
							>
								New question
							</NavLink>
							<NavLink
								className='ml-5 nav-link'
								to='/leaderboard'
								exact
								activeClassName='active'
							>
								Leaderboard
							</NavLink>
						</Nav>
						<Nav>
							<p className='nav-link'>Welcome, {value}</p>
							<a
								onClick={handleLogout}
								activeClassName='active'
								className='nav-link'
							>
								Logout
							</a>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavComp;
