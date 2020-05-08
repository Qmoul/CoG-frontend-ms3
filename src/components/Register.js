import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { setAlert } from '../actors/alert';
import { register } from '../actors/auth';
import propTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('Success');
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="./parties" />;
  }
  return (
    <>
      <h1>Sign Up</h1>
      <br />
      <h3>Create your account</h3>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
            required
          />
        </Form.Group>

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
        <Form.Group controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password2}
            onChange={(e) => onChange(e)}
            name="password2"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

Register.propTypes = {
  setAlert: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
