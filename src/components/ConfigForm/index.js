import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';
import Settings from 'material-ui-icons/Settings';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Chip from 'material-ui/Chip';
import brands from '../../modules/data/brands';

const StyledSelectControl = styled(FormControl)`
  display: block !important;
`;
const StyledIconButton = styled(IconButton)`
  && {
    margin-left: 4px;
  }
  &&:hover {
    color: black;
    background: rgba(0,0,0,0.1);
  }
`;
const StyledDialogActions = styled(DialogActions)`
  margin-right: 1em !important;
  margin-bottom: 1em !important;
`;
const StyledSelect = styled(Select)`
  min-width: 120px;
  max-width: 100%;
`;
const StyledChips = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledChip = styled(Chip)`
  margin: 0 4px;
`;
const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 120,
    }
  }
};


class ConfigForm extends React.Component {
  state = {
    open: false,
    brands: []
  };

  componentDidMount() {
    const { config } = this.props;
    if(config) {
      this.setState({
        brands: config.brands || [],
      });
    }
  }
  handleSubmit = () => {;
    //const brands = this.state;
    //this.props.onSubmit(brands);
    this.setState({ open: false });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleBrandsChange = event => {
    this.setState({ brands: event.target.value });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <span>
        <Tooltip 
          id="tooltip-icon" 
          title="Search Configuration" 
          placement="right"
        >
          <StyledIconButton
            onClick={this.handleClickOpen}
            aria-label="Search Configuration"
          >
            <Settings />
          </StyledIconButton>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          fullScreen={fullScreen}
          aria-labelledby="Configuration Form"
        >
          <DialogTitle>Search Configuration</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Edit the default brands configuration
            </DialogContentText>

            <StyledSelectControl>
              <InputLabel htmlFor="brands">Brands</InputLabel>
              <StyledSelect
                multiple
                value={this.state.brands}
                onChange={this.handleBrandsChange}
                input={<Input id="brands" multiline="true"/>}
                renderValue={selected => (
                  <StyledChips>
                    {selected.map(
                      value => <StyledChip key={value} label={value} />
                    )}
                  </StyledChips>
                )}
                MenuProps={MenuProps}
              >
                {brands.map(brand => (
                  <MenuItem
                    key={brand}
                    value={brand}
                    style={{
                      fontWeight:
                        this.state.brands.indexOf(brand) === -1
                          ? 400 : 600,
                      backgroundColor:
                        this.state.brands.indexOf(brand) === -1
                          ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.12)'
                    }}
                  >
                    {brand}
                  </MenuItem>
                ))}
              </StyledSelect>
            </StyledSelectControl>
          </DialogContent>

          <StyledDialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button
              raised
              type="submit"
              color="primary"
              autoFocus
              onClick={this.handleSubmit}
            >
              Save
            </Button>
          </StyledDialogActions>

        </Dialog>
      </span>
    );
  }
}

ConfigForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ConfigForm);
