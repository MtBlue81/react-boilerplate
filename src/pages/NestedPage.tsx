import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import NestedIndexPage from 'pages/NestedPage/IndexPage';
import NestedFirstPage from 'pages/NestedPage/FirstPage';

const NestedPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact>
        <NestedIndexPage />
      </Route>
      <Route path={`${path}/firstPage`} exact>
        <NestedFirstPage />
      </Route>
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default NestedPage;
