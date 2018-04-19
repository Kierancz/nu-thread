import React from 'react';
import PropTypes from 'prop-types';
//import { Control, Form } from 'react-redux-form';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';
//import { withStyles } from 'material-ui/styles';

import Radio, { RadioGroup } from 'material-ui/Radio';
import PersonAdd from 'material-ui-icons/PersonAdd';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
} from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Chip from 'material-ui/Chip';

const StyledControl = styled(FormControl)`
  display: inline;
  border: none;
  margin: 1em !important;
`;
const StyledSelectControl = styled(FormControl)`
  display: block !important;
`;
const StyledRadioGroup = styled(RadioGroup)`
  margin: 1em 0px;
`;
const StyledIcon = styled(PersonAdd)`
  margin-right: 0.5em;
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

const brands = [
  'Patagonia',
  'Pendleton',
  'Eddie Bauer',
  'The North Face',
  'L.L. Bean',
  'Deluth Trading Compnay',
  'Outdoor Research',
  'Lands End',
  'Orvis',
  'Arcteryx',
  'Filson'
];
const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 120,
      width: 'fit-content'
    },
  },
  style: {
    height: 'fit-content',
  }
};
const InputProps = {
  style: {
    height: 'fit-content',
  }
}


class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: '',
    fit: '',
    brands: []
  };

  componentDidMount() {
    const { profile } = this.props;
    // if redux state profile is object update ui state
    if(profile !== null && typeof profile === 'object') {
      this.setState({
        gender: profile.gender? profile.gender : '',
        upper: profile.upper? profile.upper : '',
        fit: profile.fit? profile.fit : '',
        brands: profile.brands? profile.brands : [],
      });
    }
  }
  handleSubmit = () => {;
    const profile = this.state;
    delete profile.open;
    this.props.onSubmit(profile);
    this.setState({ open: false });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleGenderChange = (event, gender) => {
    this.setState({ gender });
  };
  handleUpperChange = (event, upper) => {
    this.setState({ upper });
  };
  handleFitChange = (event, fit) => {
    this.setState({ fit });
  };
  handleBrandsChange = event => {
    this.setState({ brands: event.target.value });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <span>
        <Button
          raised
          color="primary"
          onClick={this.handleClickOpen}
        >
          <StyledIcon />
          Add Fit
        </Button>

        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          fullScreen={fullScreen}
          aria-labelledby="Fit Profile Form"
        >
          <DialogTitle>New Fit Profile</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Add your fit profile info below to get clothes that actually fit!
            </DialogContentText>

            <StyledControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <StyledRadioGroup
                aria-label="gender"
                name="gender"
                value={this.state.gender}
                onChange={this.handleGenderChange}
              >
                <FormControlLabel value="Men" control={<Radio />} label="Male" />
                <FormControlLabel value="Women" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </StyledRadioGroup>
            </StyledControl>

            <StyledControl component="fieldset">
              <FormLabel component="legend">Upper Size</FormLabel>
              <StyledRadioGroup
                aria-label="upper-size"
                name="upper-size"
                value={this.state.upper}
                onChange={this.handleUpperChange}
              >
                <FormControlLabel value="S" control={<Radio />} label="Small" />
                <FormControlLabel value="M" control={<Radio />} label="Medium" />
                <FormControlLabel value="L" control={<Radio />} label="Large" />
                <FormControlLabel value="XL" control={<Radio />} label="Extra Large" />
              </StyledRadioGroup>
            </StyledControl>

            <StyledControl component="fieldset">
              <FormLabel component="legend">Fit Preference</FormLabel>
              <StyledRadioGroup
                aria-label="fit"
                name="fit"
                value={this.state.fit}
                onChange={this.handleFitChange}
              >
                <FormControlLabel value="slim" control={<Radio />} label="Slim Fit" />
                <FormControlLabel value="athletic" control={<Radio />} label="Athletic Fit" />
                <FormControlLabel value="bigTall" control={<Radio />} label="Big & Tall" />
              </StyledRadioGroup>
            </StyledControl>

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
                inputProps={InputProps}
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
              Create Profile
            </Button>
          </StyledDialogActions>

        </Dialog>
      </span>
    );
  }
}

ProfileForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ProfileForm);
