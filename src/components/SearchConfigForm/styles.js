import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { DialogActions } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

export const StyledSelectControl = styled(FormControl)`
  display: block !important;
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
export const StyledDialogActions = styled(DialogActions)`
  && {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;
export const StyledSelect = styled(Select)`
  min-width: 120px;
  max-width: 100%;
`;
export const StyledChips = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledChip = styled(Chip)`
  margin: 0 4px;
`;
const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 120,
    }
  }
};