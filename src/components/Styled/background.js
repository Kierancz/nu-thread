import React from 'react';
import styled from 'styled-components';

const StyledGradient = styled.div`
  width: 100wh;
	height: 90vh;
	color: #fff;
	background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 100% 100%;
`;

const StyledBackground = (props, children) => {
  return (
    <StyledGradient {...props}>
      {children}
    </StyledGradient>
  );
};

export default StyledBackground;
