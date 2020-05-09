import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login } from "../actors/auth";

export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
    console.log({ email, password });
  };
  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <h1>Sign in</h1>
      <br />
      <h3>Sign into your account</h3>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onChange(e)}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
            name="password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <br />
      <Alert variant="info">
        Don't have an account? Sign up <Link to="/register">HERE</Link>
      </Alert>
    </>
  );
};

Login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
