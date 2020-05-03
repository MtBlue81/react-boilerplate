import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import NestedPage from './NestedPage';

storiesOf('pages/NestedPage', module).add('Default', () => (
  <Router>
    <NestedPage />
  </Router>
));
