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
        <Link className="nav-link" to="/player">Players</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/add-player">Add A Player</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
            <NavItem>
              <Link className="nav-link" to="">Team</Link>
            </NavItem>
              {
                user !== null
                  && <NavItem>
              { user
                ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                : <Button color='info' onClick={signInUser}>Sign In</Button>
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
