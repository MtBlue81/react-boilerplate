import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import PageContent from 'components/PageContent';

const Title = 'Nested Page';

const IndexPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <PageContent title={Title}>
      <div>
        <h2>{Title}</h2>

        <Link to={`${path}/firstPage`}>Nested 1st Page Link</Link>
      </div>
    </PageContent>
  );
};

export default IndexPage;
