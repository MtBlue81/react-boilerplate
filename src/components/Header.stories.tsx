import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('components/Header', module).add('Default', () => (
  <div style={{ backgroundColor: 'gray' }}>
    <Header />
  </div>
));
