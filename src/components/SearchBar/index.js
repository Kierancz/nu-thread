import React from 'react';
import Downshift from 'downshift';
import keycode from 'keycode';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { renderSuggestion, getSuggestions } from './renderSuggestions';
import styled from 'styled-components';
import renderInput from './renderInput';
import { Magnify, Close, ArrowRightBoldCircle } from 'mdi-material-ui';

const StyledSearchContainer = styled.span`
  display: inline-block;
  position: relative;
  /* background: rgba(0, 0, 0, 0.1); */
  border-radius: 6px 0 0 6px;
  line-height: normal;
  justify-content: center;
  color: black;
`;
const StyledSearchIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
const StyledClearIcon = styled.a`
  width: 40px;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  > svg {
    fill: black;
    &:hover {
      fill: black;
    }
  }
`;
export const StyledIconButton = styled(IconButton)`
  && {
    margin-left: 4px;
  }
  &&:hover {
    color: black;
    background: rgba(0,0,0,0.1);
  }
`;
const StyledRoot = styled.span`
  line-height: 48px;
`;
const StyledPaper = styled(Paper)`
  position: absolute;
  z-index: 1;
  margin-top: 0;
  left: 0;
  right: 0;
`;

class SearchBar extends React.Component {
  state = {
    inputValue: ''
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

  render() {
    const { inputValue } = this.state;
    const clearButton = inputValue? (
      <StyledClearIcon onClick={this.handleClearInput}>
        <Close/>
      </StyledClearIcon>) : '';

    return (
      <StyledRoot>
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
              <span style={{ position:'relative', lineHeight: 'normal'}}>
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
      </StyledRoot>
    );
  }
}

export default SearchBar;
