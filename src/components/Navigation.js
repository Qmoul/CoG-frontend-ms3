import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { logout } from '../actors/auth';
import { initialize } from '../actors/initialize';
import { migrate } from '../actors/migrate';
import Button from 'react-bootstrap/Button';

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <Nav>
        <Link to="/addparty" style={{ marginRight: 20, color: '#63f542' }}>
          Add Party
        </Link>
        <Link to="/" onClick={logout} style={{ marginRight: 10 }}>
          Logout
        </Link>
      </Nav>
    </>
  );

  const guestLinks = (
    <>
      <Nav>
        <div id="toHide">
          <Button
            variant="danger"
            onClick={initialize}
            to="/"
            style={{ marginRight: 20 }}
          >
            DBFilling - CLICK ONLY ONCE
          </Button>
        </div>
        <div id="toHide">
          <Button
            variant="danger"
            onClick={migrate}
            to="/"
            style={{ marginRight: 20 }}
          >
            SQL - MONGO
          </Button>
        </div>
        <Link to="/register" style={{ marginRight: 20 }}>
          Register
        </Link>
        {'  '}
        <Link to="/login" style={{ marginRight: 10 }}>
          Login
        </Link>
      </Nav>
    </>
  );

  return (
    <div>
      <Navbar className="bg-dark justify-content-between" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="./logo3.png"
              // width="30"
              height="60"
              //className="d-inline-block align-top"
              alt="coming and goings"
            />
          </Link>
        </Navbar.Brand>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Navbar>
      <br />
    </div>
  );
};

Navigation.protoTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
