import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FirstPage from 'pages/FirstPage';
import SecondPage from 'pages/SecondPage';
import NestedPage from 'pages/NestedPage';
import NotFoundPage from 'pages/NotFoundPage';

const MainPage: React.FC = () => (
  <Switch>
    <Route path="/firstPage" exact>
      <FirstPage />
    </Route>
    <Route path="/secondPage" exact>
      <SecondPage />
    </Route>
    <Route path="/nestedPage">
      <NestedPage />
    </Route>
    <Route path="/notFound" exact>
      <NotFoundPage />
    </Route>
    <Redirect to="/firstPage" />
  </Switch>
);

export default MainPage;
