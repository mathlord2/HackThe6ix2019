import React from "react";
import {AuthUserContext} from '../../../Session';
import HomePage from './Home';

import ErrorBoundary from '../../../testing/ErrorBoundary'

const HomeContainer = () => (
    <ErrorBoundary>
    <AuthUserContext.Consumer>
        {authUser =>
            <HomePage email={authUser ? authUser.email: 'Error No User'}></HomePage>
        }
    </AuthUserContext.Consumer>
    </ErrorBoundary>
);

export default HomeContainer