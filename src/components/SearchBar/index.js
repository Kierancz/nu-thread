import React from 'react';
import Downshift from 'downshift';
import keycode from 'keycode';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchConfig from '../../containers/SearchConfig';
import { renderSuggestion, getSuggestions } from './renderSuggestions';
import renderInput from './renderInput';
import { Magnify, Close } from 'mdi-material-ui';
import {
  StyledSearchContainer,
  StyledSearchIcon,
  StyledClearIcon,
  StyledPaper } from './indexStyles';

class SearchBar extends React.Component {
  state = {
    inputValue: '',
    mobileOpen: false
  };

  componentDidMount() {
    const { query } = this.props;
    if(query) this.setState({ inputValue: query });
  }
  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleChange = item => {
    this.setState({ inputValue: item });
    this.props.onSearch(item);
  };
  handleKeyDown = event => {
    const { inputValue } = this.state;
    if(keycode(event) === 'enter') {
      this.props.onSearch(inputValue);
    }
  };
  handleClearInput = () => {
    this.setState({ inputValue: '' });
    this.props.onSearch('');
  };
  handleMobile = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  render() {
    const { isMobile } = this.props;
    const { inputValue, mobileOpen } = this.state;
    const clearButton = inputValue? (
      <StyledClearIcon onClick={this.handleClearInput}>
        <Close/>
      </StyledClearIcon>) : '';

    const searchBar = (
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
              <span>
                <SearchConfig />
                <StyledSearchContainer>
                  <StyledSearchIcon>
                    <Magnify />
                  </StyledSearchIcon>
                  {
                    renderInput({
                      fullWidth: true,
                      InputProps: getInputProps({
                        placeholder: 'Search',
                        id: 'clothing-search',
                        onChange: this.handleInputChange,
                        onKeyDown: this.handleKeyDown
                      }),
                    })
                  }
                  { clearButton }
                </StyledSearchContainer>
                {
                  isOpen ? 
                    <StyledPaper>
                      {
                        getSuggestions(inputValue).map((suggestion, index) =>
                          renderSuggestion({
                            suggestion,
                            index,
                            itemProps: getItemProps({ item: suggestion.label }),
                            highlightedIndex,
                            selectedItem,
                          }),
                        )
                      }
                    </StyledPaper>
                    : 
                    null
                }
              </span>
          )}
        </Downshift>
    );

    const persistantDisplay = isMobile?
      (<Tooltip id="search-icon" title="Open Searchbar">
        <IconButton onClick={this.handleMobile}>
          <Magnify />
        </IconButton>
      </Tooltip>) : searchBar;

    const mobileSearch = mobileOpen?
      (<AppBar position="fixed" color="inherit">
        <Toolbar disableGutters={true} style={{justifyContent: 'center'}}>
          { searchBar }
          <Button onClick={this.handleMobile}>
            Cancel
          </Button>
        </Toolbar>
      </AppBar>) : null;
    
    return (
      <span>
        { persistantDisplay }
        { mobileSearch }
      </span>
    );
  }
}

export default SearchBar;
