import React from 'react';
import { withOutAuthorization } from '../../../Session';

const LandingPage = () => (
  <div>
    <h1>Welcome</h1>
  </div>
)

const condition = authUser => !!authUser;

export default withOutAuthorization(condition)(LandingPage);