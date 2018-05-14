import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { Input, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import brands from '../../modules/data/brands';
import {
  StyledSelectControl,
  StyledIconButton,
  StyledDialogActions,
  StyledSelect,
  StyledChips,
  StyledChip,
  MenuProps
} from './styles';
import { Settings } from 'mdi-material-ui';

class SearchConfigForm extends React.Component {
  state = {
    open: false,
    brands: [],
    config: {}
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
    const { brands, config } = this.state;
    config.brands = brands;
    console.log('handleSubmit config.brands: ', config.brands);
    this.props.onSubmit(config);
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
          onClose={this.handleRequestClose}
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
                input={<Input id="brands"/>}
                renderValue={selected => (
                  <StyledChips>
                    {selected.map(
                      value => <StyledChip key={value} label={value} />
                    )}
                  </StyledChips>
                )}
                MenuProps={MenuProps}
              >
                {
                  brands.map(brand => (
                    <MenuItem
                      key={brand}
                      value={brand}
                      style={{
                        fontWeight:
                          this.state.brands.indexOf(brand) === -1? 
                            400 : 600,
                        backgroundColor:
                          this.state.brands.indexOf(brand) === -1? 
                            'rgba(0,0,0,0)' : 'rgba(0,0,0,0.12)'
                      }}
                    >
                      {brand}
                    </MenuItem>
                  ))
                }
              </StyledSelect>
            </StyledSelectControl>
          </DialogContent>

          <StyledDialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="raised"
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

SearchConfigForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(SearchConfigForm);
