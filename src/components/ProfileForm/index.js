import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';
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
import { ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';

import { Control, Form } from 'react-redux-form';
import styled from 'styled-components';

const StyledControl = styled(Control)`
  display: inline;
  border: none;
  margin: 1em;
`;
const StyledSelectControl = styled(Control)`
  display: block !important;
  margin-left: 1em !important;
  height: 60px !important;
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
  height: 60px !important;
`;
const StyledChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
`;
const StyledChip = styled(Chip)`
  margin: 1em;
`;

const brands = [
  'Patagonia',
  'Pendleton',
  'Eddie Bauer',
];


class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: '',
    fit: '',
    brands: []
  };
  handleSubmit = (profile) => {
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
    console.log('brands changed! event: ', event.target.value);
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

          <Form
            model="profile"
            onSubmit={(profile) => this.handleSubmit(profile)}
          >
            <DialogContent>
              <DialogContentText>
                Add your fit profile info below to get clothes that actually fit!
              </DialogContentText>

              <StyledControl
                model="profile.gender"
                component={FormControl}
                required
                controlProps={{
                  component: "fieldset"
                }}
              >
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

              <StyledControl
                model="profile.upper"
                component={FormControl}
                required
                controlProps={{
                  component: "fieldset"
                }}
              >
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

              <StyledControl
                model="profile.fit"
                component={FormControl}
                required
                controlProps={{
                  component: "fieldset"
                }}
              >
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

              <StyledSelectControl
                model="profile.brands"
                component={FormControl}
              >
                <InputLabel htmlFor="brands">Brands</InputLabel>
                <StyledSelect
                  multiple
                  value={this.state.brands}
                  onChange={this.handleBrandsChange}
                  input={<Input id="brands" />}
                  renderValue={selected => (
                    <StyledChips>
                      {selected.map(
                        value => <StyledChip key={value} label={value} />
                      )}
                    </StyledChips>
                  )}
                >
                  {brands.map(brand => (
                    <MenuItem key={brand} value={brand}>
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
              >
                Create Profile
              </Button>
            </StyledDialogActions>

          </Form>
        </Dialog>
      </span>
    );
  }
}

ProfileForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ProfileForm);
