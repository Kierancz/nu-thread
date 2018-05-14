import React from 'react';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import { renderSuggestion, getSuggestions } from './renderSuggestions';
import styled from 'styled-components';
import renderInput from './renderInput';

const StyledRoot = styled.span`
  line-height: 48px;
`;
const StyledPaper = styled(Paper)`
  position: absolute;
  z-index: 1;
  margin-top: 0px;
  left: 0;
  right: 0;
`;

class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleChange = item => {
    this.setState({ inputValue: item });
    this.props.onSearch(item);
  };

  render() {
    const { inputValue } = this.state;

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
                {
                  renderInput({
                    fullWidth: true,
                    InputProps: getInputProps({
                      placeholder: 'Search',
                      id: 'clothing-search',
                      onChange: this.handleInputChange,
                    }),
                  })
                }
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
