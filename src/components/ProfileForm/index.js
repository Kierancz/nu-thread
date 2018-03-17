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
import PersonAdd from 'material-ui-icons/PersonAdd';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
} from 'material-ui/Form';
import { Control, Form } from 'react-redux-form';
import styled from 'styled-components';

const StyledControl = styled(Control)`
  display: inline;
  border: none;
  margin: 1em;
`;

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
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: '',
    fit: '',
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

  render() {
    const { classes } = this.props;

    return (
      <span>
        <Button
          raised
          color="primary"
          onClick={this.handleClickOpen}
        >
          <PersonAdd className={classes.leftIcon} />
          Add Fit
        </Button>

        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
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
                  component: "fieldset",
                  className: classes.formControl
                }}
              >
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  className={classes.group}
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <FormControlLabel value="Men" control={<Radio />} label="Male" />
                  <FormControlLabel value="Woman" control={<Radio />} label="Female" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </StyledControl>

              <StyledControl
                model="profile.upper"
                component={FormControl}
                required
                controlProps={{
                  component: "fieldset",
                  className: classes.formControl
                }}
              >
                <FormLabel component="legend">Upper Size</FormLabel>
                <RadioGroup
                  aria-label="upper-size"
                  name="upper-size"
                  className={classes.group}
                  value={this.state.upper}
                  onChange={this.handleUpperChange}
                >
                  <FormControlLabel value="S" control={<Radio />} label="Small" />
                  <FormControlLabel value="M" control={<Radio />} label="Medium" />
                  <FormControlLabel value="L" control={<Radio />} label="Large" />
                  <FormControlLabel value="XL" control={<Radio />} label="Extra Large" />
                </RadioGroup>
              </StyledControl>

              <StyledControl
                model="profile.fit"
                component={FormControl}
                required
                controlProps={{
                  component: "fieldset",
                  className: classes.formControl
                }}
              >
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
              </StyledControl>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary">
                Create Profile
              </Button>
            </DialogActions>

          </Form>
        </Dialog>
      </span>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);
