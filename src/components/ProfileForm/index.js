import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch,
} from 'redux-form-material-ui';

class ProfileForm extends React.Component {
  render() {
    return (
      <form>
        <Field 
          name="name" 
          component={TextField} 
          placeholder="Profile Name"
        />

        <Field 
          name="gender" 
          component={Select} 
          placeholder="Gender"
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="nonbinary">Non Binary</MenuItem>
        </Field>

        <Field 
          name="size" 
          component={Select} 
          placeholder="Uppers Size"
        >
          <MenuItem value="sm">Small</MenuItem>
          <MenuItem value="md">Medium</MenuItem>
          <MenuItem value="lg">Large</MenuItem>
          <MenuItem value="xlg">Extra Large</MenuItem>
        </Field>
      </form>
    )
  }
};

ProfileForm = reduxForm({
  form: 'profileForm'
})(ProfileForm);

export default ProfileForm;