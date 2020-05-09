import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createReport } from '../actors/party';
import ReportItem from './ReportItem';

const Report = ({ createReport, history }) => {
  const [formData, setFormData] = useState({
    activity_name: 'gokart',
  });

  const { activity_name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createReport(formData, history);
  };

  return (
    <Fragment>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group>
          <Form.Label>
            Choose an activity, and the report will be created
            <br />
            <p>
              How many times every user participated in parties with the chosen
              activity
            </p>
          </Form.Label>
          <Form.Control
            as="select"
            name="activity_name"
            value={activity_name}
            onChange={(e) => onChange(e)}
          >
            <option value="gokart">Gokart</option>
            <option value="tennis">Tennis</option>
            <option value="biking">Biking</option>
            <option value="dancing">Dancing</option>
            <option value="workout">Workout</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Compose
        </Button>{' '}
        <Link to="/dashboard">
          <Button variant="warning">Go back</Button>
        </Link>
      </Form>
      <br />
      <ul>
        <ReportItem></ReportItem>
      </ul>
    </Fragment>
  );
};

Report.propTypes = {
  createReport: PropTypes.func.isRequired,
};

export default connect(null, { createReport })(withRouter(Report));
