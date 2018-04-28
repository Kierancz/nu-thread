import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import keycode from 'keycode';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { renderSuggestion, getSuggestions } from './renderSuggestions';

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 50,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
});

class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = item => {
    this.setState({
      inputValue: item
    });
  };

  handleKeyDown = event => {
    const { inputValue } = this.state;
    if (keycode(event) === 'enter') {
      console.log('enter input val: ', inputValue);
      this.props.onSearch(inputValue);
    }
  };

  render() {
    const { classes } = this.props;
    const { inputValue } = this.state;

    return (
      <div className={classes.root}>
        <Downshift
          inputValue={inputValue}
          onChange={this.handleChange}
        >
          {
            ({
              getInputProps,
              getItemProps,
              isOpen,
              inputValue,
              selectedItem,
              highlightedIndex
            }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search Clothing Types',
                  id: 'clothing-search',
                  onChange: this.handleInputChange,
                  onKeyDown: this.handleKeyDown
                }),
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
