import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Alert from './components/Alert';
import Parties from './components/Parties';
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
                <TokenR exact path="/parties" component={Parties} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
