import React from 'react';
import styled from 'styled-components/macro';
import { storiesOf } from '@storybook/react';

import MainLayout from './MainLayout';

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: gray;
`;

const Sidebar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 80vh;
  background-color: red;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 2rem;
`;

storiesOf('layouts/MainLayout', module)
  .add('Default', () => (
    <div style={{ height: '100%' }}>
      <MainLayout
        content={<Main>Main</Main>}
        header={<Header>Header</Header>}
        sidebar={<Sidebar>Sidebar</Sidebar>}
      />
    </div>
  ))
  .add('No Sidebar', () => (
    <div style={{ height: '100%' }}>
      <MainLayout
        content={<Main>Main</Main>}
        header={<Header>Sidebar</Header>}
      />
    </div>
  ));
