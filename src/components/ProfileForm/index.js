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
    const { classes, onSubmit } = this.props;

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
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>New Fit Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your fit profile info below to get clothes that actually fit!
            </DialogContentText>

            <Form
              model="profile"
              onSubmit={(profile) => this.handleSubmit(profile)}
            >
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
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
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
                  <FormControlLabel value="sm" control={<Radio />} label="Small" />
                  <FormControlLabel value="md" control={<Radio />} label="Medium" />
                  <FormControlLabel value="lg" control={<Radio />} label="Large" />
                  <FormControlLabel value="xlg" control={<Radio />} label="Extra Large" />
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
            </Form>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={ e => {
                e.preventDefault();
                this.setState({ open: false });
                onSubmit();
              }}
              color="primary">
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
