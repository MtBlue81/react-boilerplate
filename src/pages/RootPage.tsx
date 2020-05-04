import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FirstPage from 'pages/FirstPage';
import SecondPage from 'pages/SecondPage';
import NestedPage from 'pages/NestedPage';
import NotFoundPage from 'pages/NotFoundPage';

const { PUBLIC_URL } = process.env;
const getAbsolutePath = (key: string) => `${PUBLIC_URL}/${key}`;

const Routes = [
  {
    key: 'firstPage',
    exact: true,
    component: FirstPage,
  },
  {
    key: 'secondPage',
    exact: true,
    component: SecondPage,
  },
  {
    key: 'nestedPage',
    exact: false,
    component: NestedPage,
  },
  {
    key: 'notFound',
    exact: true,
    component: NotFoundPage,
  },
];

const MainPage: React.FC = () => (
  <Switch>
    {Routes.map(({ key, exact, component: Component }) => (
      <Route key={key} path={getAbsolutePath(key)} exact={exact}>
        <Component />
      </Route>
    ))}
    <Redirect to={getAbsolutePath('firstPage')} />
  </Switch>
);

export default MainPage;
