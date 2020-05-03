import React from 'react';
import styled from 'styled-components/macro';

import { HEADER_HEIGHT, GAP_SIZE, COLOR_BLUE } from 'constants/styles';

const SIDEBAR_WIDTH = 256;
const CONTENT_WIDTH = 940;
const CONTENT_WITH_SIDEBAR_WIDTH = 808;
const SPACE_MARGIN = GAP_SIZE * 5;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const HeaderPane = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
  height: ${HEADER_HEIGHT}px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT}px;
  background-color: ${COLOR_BLUE};
`;

const getMaxWidth = (sidebar: boolean) =>
  `${
    sidebar
      ? SIDEBAR_WIDTH + CONTENT_WITH_SIDEBAR_WIDTH + SPACE_MARGIN
      : CONTENT_WIDTH
  }px`;

const HeaderContents = styled.div<{ sidebar: boolean }>`
  width: 100%;
  max-width: ${({ sidebar }) => getMaxWidth(sidebar)};
  height: 100%;
  padding: 0 ${GAP_SIZE * 2}px;
`;

const BodyPaneWrapper = styled.div<{ sidebar: boolean }>`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  max-width: ${({ sidebar }) => getMaxWidth(sidebar)};
  margin-top: ${HEADER_HEIGHT}px;
`;

const BodyPane = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: stretch;
`;

const SidePaneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${SIDEBAR_WIDTH}px;
  overflow-y: auto;
`;

const ContentPane = styled.div<{ sidebar: boolean }>`
  flex-grow: 1;
  width: ${({ sidebar }) =>
    `${sidebar ? CONTENT_WITH_SIDEBAR_WIDTH : CONTENT_WIDTH}px`};
  margin-left: ${({ sidebar }) => (sidebar ? `${SPACE_MARGIN}px` : 0)};
`;

const MainLayout: React.FC<{
  content?: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
}> = ({ content, header, sidebar }) => (
  <Main>
    <HeaderPane>
      <HeaderWrapper>
        <HeaderContents sidebar={!!sidebar}>{header}</HeaderContents>
      </HeaderWrapper>
    </HeaderPane>
    <BodyPaneWrapper sidebar={!!sidebar}>
      <BodyPane>
        {sidebar ? <SidePaneWrapper>{sidebar}</SidePaneWrapper> : null}
        <ContentPane sidebar={!!sidebar}>{content}</ContentPane>
      </BodyPane>
    </BodyPaneWrapper>
  </Main>
);

export default MainLayout;
