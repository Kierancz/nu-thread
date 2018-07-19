import styled from 'styled-components';

const StyledUnderline = styled.span`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 110%;
  border-radius: 0;
  transition: all 0.25s ease-in;
  &:hover {
    background-size: 110% 100%;
    border-radius: 4px;
  }
`;

export default StyledUnderline;
