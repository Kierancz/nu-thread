import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { HomeOutline, InformationOutline, TshirtCrew } from 'mdi-material-ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPath = styled.path`
  fill:none;
  stroke:#000000;
  stroke-width:35;
  stroke-linecap:round;
  stroke-miterlimit:10;
`;
const StyledPathDash = StyledPath.extend`
  stroke-dasharray: 700;
  stroke-dashoffset: 1400;
`;
const StyledSvg = styled.svg`
  position: absolute;
  left: 20px;
  display: inline-flex;
  width: 40px;
  top: 14px;
  margin-left: 1em;
`;
const logoSvg = (
  <StyledSvg viewBox="0 0 324 288">
    <StyledPathDash d="M90,126c0,12,0,24,0,36c0,59.2,48.8,108,108,108s108-48.8,108-108c0-12,0-24,0-36c-0.4-19.4-15.7-35-34-36
      c-19.7-1.1-37.5,15.1-38,36c0,12,0,24,0,36"/>
    <StyledPath d="M90,161.9c0-12,0-24,0-36c0-19.7,16.3-36,36-36s36,16.3,36,36c0,12,0,24,0,36c0,19.7,16.3,36,36,36
      s36-16.3,36-36c0-12,0-24,0-36"/>
    <StyledPathDash d="M234,161.9c0-12,0-24,0-36c0-59.2-48.8-108-108-108S18,66.7,18,125.9c0,12,0,24,0,36c0.4,19.4,15.7,35,34,36
      c19.7,1.1,37.5-15.1,38-36c0-12,0-24,0-36"/>
  </StyledSvg>
);
const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;

  &:hover ${StyledPathDash} {
    animation: logoDash 3s ease-in-out alternate infinite;
  }

  @keyframes logoDash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
const StyledLogoText = styled.span`
  color: black;
  font-size: 26px;
  line-height: 26px;
  margin-left: 1.5em;
  font-weight: 700;
`;
const LogoWrapper = styled.div`
  height: 4em;
  display: inline-flex;
`;

export const NavLogo = (
  <LogoWrapper>
    <StyledLink to="/">
      { logoSvg }
      <StyledLogoText>
        thread
      </StyledLogoText>
    </StyledLink>
  </LogoWrapper>
);

export const NavLinks = (
  <div>
    <StyledLink to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeOutline />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/about">
      <ListItem button>
        <ListItemIcon>
          <InformationOutline />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/items">
      <ListItem button>
        <ListItemIcon>
          <TshirtCrew />
        </ListItemIcon>
        <ListItemText primary="Items" />
      </ListItem>
    </StyledLink>
  </div>
);
