import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Dashboard = ({ auth: { user } }) => {
  //   useEffect(() => {
  //     getCurrentProfile();
  //   }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1>This is your homepage</h1>
      <p>Welcome {user && user.name}</p>
      <Fragment>
        <Link to="/addparty">
          <Button variant="primary">Create party</Button>
        </Link>{' '}
        <Link to="/report">
          <Button variant="primary">Create a report</Button>
        </Link>
      </Fragment>
    </Fragment>
  );
};

Dashboard.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  // profile: state.profile,
});

export default connect(mapStateToProps)(Dashboard);
