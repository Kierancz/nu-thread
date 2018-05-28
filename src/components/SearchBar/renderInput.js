import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.span`
  position: relative;
  display: inline-block;
`;
const StyledInput = styled.input`
  font: inherit;
  color: inherit;
  border-radius: 6px;
  margin: 0;
  padding: 10px 40px 10px 40px;
  display: block;
  background: none;
  white-space: normal;
  border: 2px solid rgba(0,0,0,.2);

  width: 100px;
  @media (max-width: 400px) {
    width: 80px;
  }
  -webkit-transition: width .5s;
	-moz-transition: width .5s;
	transition: width .5s;
  &:hover {
    border: 2px solid rgba(0,0,0,.5);
  }
  &:focus {
    outline: none;
    border: 2px solid #003EFF;
    @media (min-width: 700px) {
      width: 200px;
    }
    @media (max-width: 400px) {
      width: 100px;
    }
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
