import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.span`
  position: relative;
  display: inline-block;
`;
const StyledInput = styled.input`
  font: inherit;
  color: inherit;
  border: 0;
  margin: 0;
  padding: 8px 8px 8px 72px;
  display: block;
  background: none;
  white-space: normal;
  @media only screen and (max-width: 320px) {
    width: 140px;
  }
`;

const renderInput = inputProps => {
  const { InputProps, ref } = inputProps;

  return (
    <StyledInputContainer>
      <StyledInput
        inputRef={ ref }
        { ...InputProps }
      />
    </StyledInputContainer>
  );
}

export default renderInput;
