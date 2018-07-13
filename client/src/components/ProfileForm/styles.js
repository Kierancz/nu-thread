import styled from 'styled-components';
import DialogActions from '@material-ui/core/DialogActions';
import { RadioGroup } from '@material-ui/core';
import { AccountPlus } from 'mdi-material-ui'
import { FormControl } from '@material-ui/core';
import StyledIcon from '../Styled/icon';

export const StyledControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledControl = styled(FormControl)` 
  && {
    margin: 1em;
  }
`;
export const StyledRadioGroup = styled(RadioGroup)`
  margin: 1em 0;
`;
export const StyledAccount = StyledIcon(AccountPlus);
export const StyledDialogActions = styled(DialogActions)`
  && {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;