import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Timeline from '../pages/Timeline';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/timeline" component={Timeline} />
    </Switch>
  );
}
