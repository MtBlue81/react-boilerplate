import React from 'react';
import styled from 'styled-components/macro';

import { COLOR_WHITE } from 'constants/styles';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 2rem;
  color: ${COLOR_WHITE};
`;

const Header: React.FC = () => <Wrapper>Boilerplate</Wrapper>;

export default Header;
