import React from 'react';
import { Helmet } from 'react-helmet';

const DEFAULT_TITLE = 'Boilerplate';

const PageTitle: React.FC<{ title?: string }> = ({ title = DEFAULT_TITLE }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;
