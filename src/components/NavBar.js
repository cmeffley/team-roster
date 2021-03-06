import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="navbar-brand" to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link className="navbar-brand" to="/team">Team</Link>
      </NavItem>
      <NavItem>
        <Link className="navbar-brand" to="/add-player">Add a Player</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
              {
                user !== null
                  && <NavItem className='authButtons'>
              { user
                ? <Button id='signOut' color='danger' onClick={signOutUser}>Sign Out</Button>
                : <Button id='signIn' color='info' onClick={signInUser}>Sign In</Button>
              }
            </NavItem>
              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
