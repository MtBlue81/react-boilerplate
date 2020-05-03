import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import RootPage from './RootPage';

storiesOf('pages/RootPage', module)
  .add('Default', () => (
    <Router>
      <RootPage />
    </Router>
  ))
  .add('1st Page', () => (
    <Router initialEntries={['/firstPage']}>
      <RootPage />
    </Router>
  ))
  .add('2nd Page', () => (
    <Router initialEntries={['/secondPage']}>
      <RootPage />
    </Router>
  ))
  .add('Nested Page', () => (
    <Router initialEntries={['/nestedPage']}>
      <RootPage />
    </Router>
  ))
  .add('Nested 1st Page', () => (
    <Router initialEntries={['/nestedPage/firstPage']}>
      <RootPage />
    </Router>
  ))
  .add('Not found Page', () => (
    <Router initialEntries={['/nestedPage/secondPage']}>
      <RootPage />
    </Router>
  ));
