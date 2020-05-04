import React from 'react';
import styled from 'styled-components/macro';
import { NavLink, NavLinkProps } from 'react-router-dom';

import {
  GAP_SIZE,
  COLOR_WHITE,
  BACKGROUND_BLACK,
  COLOR_BLUE,
} from 'constants/styles';

const { PUBLIC_URL } = process.env;
const getAbsolutePath = (key: string) => `${PUBLIC_URL}/${key}`;

const activeStyle = {
  borderRadius: `${GAP_SIZE}px`,
  backgroundColor: COLOR_BLUE,
};
const ActiveStyledNavLink: React.FC<NavLinkProps> = (props) => (
  <NavLink {...props} activeStyle={activeStyle} />
);

const StyledNavLink = styled(ActiveStyledNavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${GAP_SIZE * 8}px;
  padding: ${GAP_SIZE * 2}px ${GAP_SIZE}px ${GAP_SIZE * 2}px ${GAP_SIZE * 4}px;
  color: ${COLOR_WHITE};
  text-decoration: none;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: ${GAP_SIZE * 4}px 0 ${GAP_SIZE * 3}px ${GAP_SIZE * 4}px;
  color: ${COLOR_WHITE};
  background-color: ${BACKGROUND_BLACK};
`;

const List = styled.ul`
  padding: 0;
  margin: 0 0 0 ${GAP_SIZE}px;
  list-style: none;
`;

const Links = [
  {
    key: 'firstPage',
    label: '1st Page',
  },
  {
    key: 'secondPage',
    label: '2nd Page',
  },
  {
    key: 'nestedPage',
    label: 'Nested Page',
  },
];

const Sidebar: React.FC = () => (
  <Wrapper>
    <List>
      {Links.map(({ key, label }) => (
        <li key={key}>
          <StyledNavLink to={getAbsolutePath(key)}>{label}</StyledNavLink>
        </li>
      ))}
    </List>
  </Wrapper>
);

export default Sidebar;
