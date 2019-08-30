import React from 'react';
import { withAuthorization } from '../../../Session';

const HomePage = () => (
  <div>
    <p>home</p>
  </div>
)

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);