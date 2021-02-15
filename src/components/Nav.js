import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

function NavComp(props) {
  const history = useHistory();

  function handleLogout(e) {
    props.setAuthedUser(null);
    e.preventDefault();
    history.push('/signin');
  }
  console.log(props.authedUser);
  const user = props.users[props.authedUser];
  const { name, avatarURL } = user;

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
                className='ml-lg-5 nav-link'
                to='/add'
                exact
                activeClassName='active'
              >
                New question
              </NavLink>
              <NavLink
                className='ml-lg-5 nav-link'
                to='/leaderboard'
                exact
                activeClassName='active'
              >
                Leaderboard
              </NavLink>
            </Nav>

            <Nav className='d-flex flex-row '>
              <div className='nav-link mr-4 mt-1'>
                Welcome{' '}
                <span>
                  <img
                    src={avatarURL}
                    alt={`avatar of ${name}`}
                    className='avatar d-none d-lg-inline'
                  />
                </span>{' '}
                {name}
              </div>

              <FiLogOut
                onClick={handleLogout}
                className='nav-link logout mt-lg-4 mt-1'
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch(setAuthedUser(id)),
});
const mapStateToProps = (state) => {
  return {
    users: state.users,
    authedUser: state.authedUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavComp);
