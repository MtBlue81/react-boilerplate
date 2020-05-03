import React from 'react';

import PageContent from 'components/PageContent';

const Title = 'Nested 1st Page';

const FirstPage: React.FC = () => (
  <PageContent title={Title}>
    <h2>{Title}</h2>
  </PageContent>
);

export default FirstPage;
