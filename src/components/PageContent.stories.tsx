import React from 'react';
import { storiesOf } from '@storybook/react';

import PageContent from './PageContent';

storiesOf('components/PageContent', module).add('Default', () => (
  <PageContent>Test Content</PageContent>
));
