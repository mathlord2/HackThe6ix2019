import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

const withOutAuthorization = condition => Component => {
  class WithOutAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (condition(authUser)) {
            this.props.history.push(ROUTES.HOME);
          } 
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? null : <Component {...this.props} />
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(withFirebase(WithOutAuthorization));
};

export default withOutAuthorization;