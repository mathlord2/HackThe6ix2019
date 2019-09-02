import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import { withAuthentication } from '../../Session';
import {hot} from "react-hot-loader";
import "./App.css";

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomeContainer from './HomeContainer';
import AccountPage from './Account';
import PasswordForgetPage from './PasswordForget';

import ErrorBoundary from '../../testing/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <hr/>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomeContainer} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);