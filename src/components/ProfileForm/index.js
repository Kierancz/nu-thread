import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { FormLabel, FormControlLabel } from '@material-ui/core';
import {
  StyledControlWrapper, 
  StyledDialogContentText, 
  StyledControl, 
  StyledRadioGroup, 
  StyledIcon, 
  StyledDialogActions
} from './styles';

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
    if(profile) {
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
            <StyledDialogContentText>
              Add your fit info below to find clothes that fit!
            </StyledDialogContentText>

            <StyledControlWrapper>
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
                  aria-label="upper size"
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
                  aria-label="general fit"
                  name="fit"
                  value={this.state.fit}
                  onChange={this.handleFitChange}
                >
                  <FormControlLabel value="slim" control={<Radio />} label="Slim Fit" />
                  <FormControlLabel value="athletic" control={<Radio />} label="Athletic Fit" />
                  <FormControlLabel value="bigTall" control={<Radio />} label="Big & Tall" />
                </StyledRadioGroup>
              </StyledControl>
            </StyledControlWrapper>
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
