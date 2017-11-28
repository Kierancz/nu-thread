import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const styles = theme => ({
  root: {
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
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const upperSizes = [
  'Extra Small',
  'Small',
  'Medium',
  'Large',
  'Extra Large',
  'Extra Extra Large'
];

class ProfileForm extends React.Component {
  state = {
    open: false,
    gender: '',
    upper: [],
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

  handleUpperChange = event => {
    this.setState({ upper: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>New Fit Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your fit profile info below to get clothes that actually fit!
            </DialogContentText>
            
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

            <InputLabel htmlFor="upper-size">Upper Size</InputLabel>
            <Select
              multiple
              value={this.state.upper}
              onChange={this.handleUpperChange}
              input={<Input id="upper-size" />}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 200,
                  },
                },
              }}
            >
              {upperSizes.map(upper => (
                <MenuItem
                  key={upper}
                  value={upper}
                >
                  {upper}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Create Profile
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);

/*
class ProfileForm extends React.Component {
  render() {
    return (
      <Form>
        <Field
          name="name" 
          component={TextField} 
          placeholder="Profile Name"
        />

        <Section>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Field
            name="gender" 
            component={Select} 
            placeholder="Gender"
            inputField={<Input id="gender" value="" />}

          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="nonbinary">Non-binary</MenuItem>
          </Field>

          <Field 
            name="waist-size" 
            component={Select} 
            placeholder="Waist Size"
          >
            <MenuItem value="26">26</MenuItem>
            <MenuItem value="28">28</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="32">32</MenuItem>
            <MenuItem value="34">34</MenuItem>
            <MenuItem value="36">36</MenuItem>
          </Field>

          <Field 
            name="length-size" 
            component={Select} 
            placeholder="Length Size"
          >
            <MenuItem value="26">26</MenuItem>
            <MenuItem value="28">28</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="32">32</MenuItem>
            <MenuItem value="34">34</MenuItem>
            <MenuItem value="36">36</MenuItem>
          </Field>

          <Field name="upper-size" component={RadioGroup}>
            <RadioButton value="xsm" label="Extra Small"/>
            <RadioButton value="sm" label="Small"/>
            <RadioButton value="md" label="Medium"/>
            <RadioButton value="lg" label="Large"/>
            <RadioButton value="xlg" label="Extra Large"/>
          </Field>
        </Section>
      </Form>
    )
  }
};

ProfileForm = reduxForm({
  form: 'profileForm'
})(ProfileForm);

export default ProfileForm;

/*
          <Field
            name="upper-size" 
            component={Select}
            label="Size"
            placeholder="Uppers Size"
          >
            <MenuItem value="sm">Small</MenuItem>
            <MenuItem value="md">Medium</MenuItem>
            <MenuItem value="lg">Large</MenuItem>
            <MenuItem value="xlg">Extra Large</MenuItem>
          </Field>
          */