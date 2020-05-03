import React from 'react';
import { storiesOf } from '@storybook/react';

import FirstPage from './FirstPage';

storiesOf('pages/NestedPage/FirstPage', module).add('Default', () => (
  <FirstPage />
));
