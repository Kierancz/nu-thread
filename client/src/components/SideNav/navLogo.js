import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const LogoWrapper = styled.div`
  height: 4em;
  display: inline-flex;
`;

const NavLogo = (
  <LogoWrapper>
    <Logo text="thread" link="/" />
  </LogoWrapper>
);

export default NavLogo;