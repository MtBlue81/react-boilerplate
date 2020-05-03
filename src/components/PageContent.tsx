import React, { ComponentProps } from 'react';
import styled from 'styled-components/macro';

import CenterLayout from 'layouts/CenterLayout';
import { GAP_SIZE, COLOR_WHITE } from 'constants/styles';
import PageTitle from 'components/PageTitle';

const StyledCenterLayout = styled(CenterLayout)`
  height: 100%;
  padding: ${GAP_SIZE * 4}px;
  background-color: ${COLOR_WHITE};
`;

const PageContent: React.FC<
  { title?: string } & ComponentProps<typeof CenterLayout>
> = ({ title, ...rest }) => (
  <>
    <PageTitle title={title} />
    <StyledCenterLayout {...rest} />
  </>
);

export default PageContent;
