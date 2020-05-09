import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import report from './report';

export default combineReducers({
  alert,
  auth,
  report,
});
