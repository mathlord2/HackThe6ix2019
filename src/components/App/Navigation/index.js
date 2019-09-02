import React from 'react';
import { Link } from 'react-router-dom';

import "./Navigation.css"
import { AuthUserContext } from '../../../Session';
import SignOutButton from './SignOut';
import * as ROUTES from '../../../constants/routes';

import ErrorBoundary from '../../../testing/ErrorBoundary';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ErrorBoundary>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <div>{authUser}</div>
        <ul>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
    }
  </AuthUserContext.Consumer>  
  </ErrorBoundary>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
  </ul>
);

export default Navigation;