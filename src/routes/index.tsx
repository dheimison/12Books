import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import BookDetail from 'pages/BookDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/Book" exact component={BookDetail} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}
