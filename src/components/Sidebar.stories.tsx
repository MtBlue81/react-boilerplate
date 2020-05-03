import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Sidebar from './Sidebar';

storiesOf('components/Sidebar', module).add('Default', () => (
  <Router>
    <Sidebar />
  </Router>
));
