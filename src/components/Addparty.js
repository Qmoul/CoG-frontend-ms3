import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createParty } from '../actors/party';

const Addparty = ({ createParty, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    activity_name: '',
  });

  const { name, date, activity_name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createParty(formData, history);
  };

  return (
    <Fragment>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group>
          <Form.Label>Name of the party</Form.Label>
          <Form.Control
            type="text"
            placeholder="Party name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Date of the happening, Correct format: YYYY-MM-DD
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => onChange(e)}
            name="date"
          >
            {/* <DateTime
              value={date}
              onChange={(e) => onChange(e)}
              name="date"
            ></DateTime> */}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Activity</Form.Label>
          <Form.Control
            as="select"
            name="activity_name"
            value={activity_name}
            onChange={(e) => onChange(e)}
          >
            <option>Select an activity</option>
            <option value="tennis">Tennis</option>
            <option value="biking">Biking</option>
            <option value="gokart">Gokart</option>
            <option value="dancing">Dancing</option>
            <option value="workout">Workout</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{' '}
        <Link to="/dashboard">
          <Button variant="warning">Go back</Button>
        </Link>
      </Form>
    </Fragment>
  );
};

Addparty.propTypes = {
  createParty: PropTypes.func.isRequired,
};

export default connect(null, { createParty })(withRouter(Addparty));
