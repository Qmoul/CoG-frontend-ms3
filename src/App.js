import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import Addparty from './components/Addparty';
import Report from './components/Report';
import TokenR from './components/TokenR';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actors/auth';
import setAuthToken from './token/setAuthToken';

import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <Navigation></Navigation>
          </div>
          <br></br>
          <div>
            <Route exact path="/" component={Landing} />
            <div className="container vertical-center">
              <div>
                <Alert />
              </div>
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <TokenR exact path="/dashboard" component={Dashboard} />
                <TokenR exact path="/addparty" component={Addparty} />
                <TokenR exact path="/report" component={Report} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
