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
  padding: 10px 8px 10px 40px;
  display: block;
  background: none;
  white-space: normal;
  border: 2px solid rgba(0,0,0,.2);

  width: 60px;
  -webkit-transition: width .5s;
	-moz-transition: width .5s;
	transition: width .5s;
  &:hover {
    border: 2px solid rgba(0,0,0,.5);
  }
  &:focus {
    width: 200px;
    outline: none;
    border: 2px solid #003EFF;
    @media only screen and (max-width: 320px) {
      width: 170px;
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
