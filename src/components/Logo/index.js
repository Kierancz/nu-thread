import React from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom/Link';

const LogoWrapper = styled.div`
  height: 61px;
  display: inline-flex;
`;
const StyledPathDash = styled.path`
  fill:none;
  stroke-width:35;
  stroke-linecap:round;
  stroke-miterlimit:10;
`;
const StyledSvg = styled.svg`
  position: absolute;
  left: 20px;
  display: inline-flex;
  width: 40px;
  height: 40px;
  top: 14px;
  padding: 0 4px;
  margin-left: 1em;
`;
const logoSvg = (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 324 288">
    <defs>
      <linearGradient id="gradient" x1="100%" y1="33%" x2="66%" y2="100%">
        <stop offset="0%" stopColor="#003eff" />
        <stop offset="100%" stopColor="#fc00ff" />
      </linearGradient>
      
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  
    <StyledPathDash stroke="url(#gradient)" filter="url(#glow)" d="M162,126c0,12,0,24,0,36c0,2.4,0.4,15.6,11.1,25.9c10.1,9.7,22.2,10.1,24.9,10.1c3.2,0,13.8-0.6,23.2-8.6
    c12.2-10.4,12.8-25.1,12.8-27.4c0-12,0-24,0-36c0-19.7,16.3-36,36-36s36,16.3,36,36c0,12,0,24,0,36c0,59.2-48.8,108-108,108
    S90,221.2,90,162c0-3,0-27,0-36c0-2.7,0.4-14.6,9.8-24.6C110.2,90.4,123.6,90,126,90c2.4,0,15.7,0.4,26.1,11.3
    C161.6,111.3,162,123.3,162,126c0,12,0,24,0,36c0,19.7,16.3,36,36,36s36-16.3,36-36c0-12,0-24,0-36c0-59.2-48.8-108-108-108
    S18,66.8,18,126c0,12,0,24,0,36c0,19.7,16.3,36,36,36s36-16.3,36-36v-36c0-19.7,16.3-36,36-36S162,106.3,162,126c0,12,0,24,0,36"/>
  </StyledSvg>
);
const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;

  &:hover ${StyledPathDash} {
    stroke-dasharray: 100;
    stroke-dashoffset: 3000;
    animation: logoDash 7s cubic-bezier(0.6,0.1,0.6,0.9) infinite alternate;  }

  @keyframes logoDash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
const StyledLogoText = styled.span`
  color: #003eff;
  font-size: 28px;
  line-height: 26px;
  position: absolute;
  top: 0.7em;
  left: 3em;
  font-weight: 700;
`;

const Logo = (
  <LogoWrapper>
    <StyledLink to="/">
      { logoSvg }
      <StyledLogoText>
        thread
      </StyledLogoText>
    </StyledLink>
  </LogoWrapper>
);

export default Logo;