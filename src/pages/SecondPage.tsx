import React from 'react';

import PageContent from 'components/PageContent';

const Title = '2nd Page';

const SecondPage: React.FC = () => (
  <PageContent title={Title}>
    <h2>{Title}</h2>
  </PageContent>
);

export default SecondPage;
