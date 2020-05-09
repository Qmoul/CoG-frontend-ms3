import React from "react";
import Button from "react-bootstrap/Button";
import Center from "react-center";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Center>
        <div>
          <h1>Comings and Goings</h1>
        </div>
        <br />
      </Center>
      <Center>
        <div>
          <Link to="/register">
            <Button variant="outline-primary">Sign up</Button>
          </Link>{" "}
          <Link to="/login">
            <Button variant="success">Login</Button>
          </Link>
        </div>
      </Center>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
