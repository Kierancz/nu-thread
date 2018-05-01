import React from 'react';
import styled from 'styled-components';
import Search from 'material-ui-icons/Search';


const StyledSearchContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;
const StyledSearchIcon = styled.div`
  width: 72px;
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
  width: 200px;
  border: 0;
  margin: 0;
  padding: 8px 8px 8px 72px;
  display: block;
  background: none;
  white-space: normal;
`;

const renderInput = (inputProps) => {
  const { InputProps, ref } = inputProps;

  return (
    <StyledSearchContainer>
      <StyledSearchIcon>
        <Search />
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
