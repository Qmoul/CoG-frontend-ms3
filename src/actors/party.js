import axios from 'axios';
import { setAlert } from './alert';

import {
  CREATE_PARTY,
  PARTY_ERROR,
  CREATE_REPORT,
  REPORT_ERROR,
} from './types';

// Create a party
export const createParty = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/restapi/parties', formData, config);

    dispatch({
      type: CREATE_PARTY,
      payload: res.data,
    });

    dispatch(setAlert('Party created', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PARTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create a report
export const createReport = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/restapi/parties/report', formData, config);

    dispatch({
      type: CREATE_REPORT,
      payload: res.data,
    });

    dispatch(setAlert('Report created', 'success'));

    //history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REPORT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
