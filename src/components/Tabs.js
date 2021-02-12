import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function TabComp() {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
				className='mt-4 w-50 mx-auto'
			>
				<Container className='justify-content-center'>
					<Nav className=''>
						<NavLink
							to='/'
							exact
							activeClassName='active'
							className='nav-link mr-lg-5'
						>
							Unanswered Question
						</NavLink>

						<NavLink
							className='nav-link'
							to='/answered'
							exact
							activeClassName='active'
						>
							Answered Question
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default TabComp;
