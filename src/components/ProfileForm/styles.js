import styled from 'styled-components';
import {
  DialogActions,
  DialogContentText,
} from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { AccountPlus } from 'mdi-material-ui'
import { FormControl } from '@material-ui/core';

export const StyledControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
`;
export const StyledDialogContentText = styled(DialogContentText)` 
  && {
    margin-left: 1.5em;
  }
`;
export const StyledControl = styled(FormControl)` 
  && {
    margin: 1em;
  }
`;
export const StyledRadioGroup = styled(RadioGroup)`
  margin: 1em 0px;
`;
export const StyledIcon = styled(AccountPlus)`
  margin-right: 0.5em;
`;
export const StyledDialogActions = styled(DialogActions)`
  && {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;