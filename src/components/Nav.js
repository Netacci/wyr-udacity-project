import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import { ValueContext } from '../contexts/ValueContext';

function NavComp() {
	const [value] = useContext(ValueContext);
	const [users, setUsers] = useContext(ValueContext);
	const history = useHistory();

	function handleLogout(e) {
		console.log(users);
		setUsers([]);
		e.preventDefault();
		history.push('/signin');
	}

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
								className='ml-l-5 nav-link'
								to='/add'
								exact
								activeClassName='active'
							>
								New question
							</NavLink>
							<NavLink
								className='ml-l-5 nav-link'
								to='/leaderboard'
								exact
								activeClassName='active'
							>
								Leaderboard
							</NavLink>
						</Nav>
					</Navbar.Collapse>
					<Nav className='d-flex flex-row mt-3'>
						<p className='nav-link mr-5'>Welcome {value}</p>
						<p onClick={handleLogout} className='nav-link logout'>
							Logout
						</p>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default NavComp;
