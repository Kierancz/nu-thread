import React from 'react';
import styled from 'styled-components';
import { Magnify } from 'mdi-material-ui';

const StyledSearchContainer = styled.span`
  display: inline-block;
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  line-height: normal;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
const StyledSearchIcon = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
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

const renderInput = (inputProps) => {
  const { InputProps, ref } = inputProps;

  return (
    <StyledSearchContainer>
      <StyledSearchIcon>
        <Magnify />
      </StyledSearchIcon>
      <StyledInputContainer>
        <StyledInput
          inputRef={ ref }
          { ...InputProps }
        />
      </StyledInputContainer>
    </StyledSearchContainer>
  );
}

export default renderInput;
