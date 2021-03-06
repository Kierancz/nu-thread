
import React from 'react';
import styled from 'styled-components';

const Spinner = (props) => (
  <StyledDiv>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
    <p>{props.message}</p>
  </StyledDiv>
);

const StyledDiv = styled.div`
  width: 100%;
  margin: auto;
`

const StyledSpinner = styled.svg`
  animation: spinner-rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  margin: auto;

  & .path {
    stroke: #003EFF;
    stroke-linecap: round;
    animation: spinner-dash 1.5s ease-in-out infinite;
  }

  @keyframes spinner-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spinner-dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
