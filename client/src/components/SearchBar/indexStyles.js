import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

export const StyledSearchContainer = styled.span`
  display: inline-block;
  position: relative;
  /* background: rgba(0, 0, 0, 0.1); */
  border-radius: 6px 0 0 6px;
  line-height: normal;
  justify-content: center;
  color: black;
`;
export const StyledSearchIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
export const StyledClearIcon = styled.a`
  width: 40px;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  > svg {
    fill: black;
    &:hover {
      fill: black;
    }
  }
`;
export const StyledIconButton = styled(IconButton)`
  && {
    margin-left: 4px;
  }
  &&:hover {
    color: black;
    background: rgba(0,0,0,0.1);
  }
`;
export const StyledPaper = styled(Paper)`
  position: absolute;
  z-index: 1;
  margin-top: 0;
  left: 0;
  right: 0;
`;