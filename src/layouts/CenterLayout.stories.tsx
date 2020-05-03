import React from 'react';
import { storiesOf } from '@storybook/react';

import CenterLayout from './CenterLayout';

storiesOf('layouts/CenterLayout', module).add('Default', () => (
  <CenterLayout style={{ height: '100px', backgroundColor: 'gray' }}>
    Centered Content
  </CenterLayout>
));
