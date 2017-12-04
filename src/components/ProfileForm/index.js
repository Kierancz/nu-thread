import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { 
  FormLabel, 
  FormControl, 
  FormControlLabel, 
  FormHelperText } from 'material-ui/Form';
import styled from 'styled-components';

const styles = theme => ({
  root: {
    left: '0px',
    display: 'flex',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: '',
    fit: '',
  };

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
  /*
    handleUpperChange = (event, upper) => {
    this.setState(prevState => ({
      profile: {
        ...prevState.profile,
        upper: upper
      }
    }));
  };
  */

  handleSubmit = (event, props) => {
    event.preventDefault();
    this.setState({ open: false });
    this.props.store.dispatch({
      type: 'ADD_PROFILE',
      profile: this.state
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <span>
        <Button raised color="primary" onClick={this.handleClickOpen}>Create Fit Profile</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>New Fit Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your fit profile info below to get clothes that actually fit!
            </DialogContentText>

            <FormControl component="fieldset" required className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                className={classes.group}
                value={this.state.gender}
                onChange={this.handleGenderChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" required className={classes.formControl}>
              <FormLabel component="legend">Upper Size</FormLabel>
              <RadioGroup
                aria-label="upper-size"
                name="upper-size"
                className={classes.group}
                value={this.state.upper}
                onChange={this.handleUpperChange}
              >
                <FormControlLabel value="sm" control={<Radio />} label="Small" />
                <FormControlLabel value="md" control={<Radio />} label="Medium" />
                <FormControlLabel value="lg" control={<Radio />} label="Large" />
                <FormControlLabel value="xlg" control={<Radio />} label="Extra Large" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" required className={classes.formControl}>
              <FormLabel component="legend">Fit Preference</FormLabel>
              <RadioGroup
                aria-label="fit"
                name="fit"
                className={classes.group}
                value={this.state.fit}
                onChange={this.handleFitChange}
              >
                <FormControlLabel value="slim" control={<Radio />} label="Slim Fit" />
                <FormControlLabel value="athletic" control={<Radio />} label="Athletic Fit" />
                <FormControlLabel value="bigTall" control={<Radio />} label="Big & Tall" />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Create Profile
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);