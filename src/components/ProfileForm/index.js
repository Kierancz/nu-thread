import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import { Radio, RadioGroup } from '@material-ui/core';
import { AccountPlus } from 'mdi-material-ui'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

const StyledControl = styled(FormControl)`
  display: inline;
  border: none;
  margin: 1em !important;
`;
const StyledRadioGroup = styled(RadioGroup)`
  margin: 1em 0px;
`;
const StyledIcon = styled(AccountPlus)`
  margin-right: 0.5em;
`;
const StyledDialogActions = styled(DialogActions)`
  margin-right: 1em !important;
  margin-bottom: 1em !important;
`;

class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: '',
    fit: '',
  };

  componentDidMount() {
    const { profile } = this.props;
    // if redux state has a profile, update ui state
    if(profile !== null && typeof profile === 'object') {
      this.setState({
        gender: profile.gender  || '',
        upper:  profile.upper   || '',
        fit:    profile.fit     || '',
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

  render() {
    const { fullScreen } = this.props;

    return (
      <span>
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <StyledIcon />
          Fit
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleRequestClose}
          fullScreen={fullScreen}
          aria-labelledby="Fit Profile Form"
        >
          <DialogTitle>New Fit Profile</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Add your fit info below to find clothes that fit!
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
              Save Profile
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
