import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import "./Navigation.css"

import SignOutButton from './SignOut';
import DropDown from './Dropdown';

import { AuthUserContext } from '../../../Session';
import * as ROUTES from '../../../constants/routes';
import ErrorBoundary from '../../../testing/ErrorBoundary';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth authUser={authUser.displayName}/> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuth extends React.Component {
  static propTypes = {
    authUser: PropTypes.string,
  }

  render() {
    return(
      <div>
        <DropDown content={this.props.authUser}>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </DropDown>
      </div>
    );
  }
}

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