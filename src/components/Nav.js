import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavComp() {
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
								to='/new'
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
							<p className='nav-link'>Welcome, User</p>
							<NavLink
								to='/logout'
								exact
								activeClassName='active'
								className='nav-link'
							>
								Logout
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavComp;
