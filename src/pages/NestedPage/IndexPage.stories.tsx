import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import IndexPage from './IndexPage';

storiesOf('pages/NestedPage/IndexPage', module).add('Default', () => (
  <Router>
    <IndexPage />
  </Router>
));
