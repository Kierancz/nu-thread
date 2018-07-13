import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import FilterLink from '../../containers/FilterLink';
import StyledIcon from '../Styled/icon';
import { Sort, SortAscending, SortDescending, Poll, Clock } from 'mdi-material-ui'

const StyledRoot = styled.span`
  display: flex;
  align-self: center;
`;
const StyledSort = StyledIcon(Sort);
const StyledBestMatch = StyledIcon(Poll);
const StyledEndSoon = StyledIcon(Clock);
const StyledSortDesc = StyledIcon(SortDescending);
const StyledSortAsc = StyledIcon(SortAscending);

class FilterBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { isMobile } = this.props;
    const SortButton = isMobile? 
      (<Tooltip id="sort-icon" title="Sort Items">
        <IconButton
          aaria-owns={anchorEl ? 'sort-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <StyledSort />
        </IconButton>
      </Tooltip>) 
      : 
      (<Button
        aria-owns={anchorEl ? 'sort-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <StyledSort pos="left" />
        Sort
      </Button>);

    return (
      <StyledRoot>
        { SortButton }
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <FilterLink
            sortType='SHOW_ALL'
            handleClose={this.handleClose}
          >
            None
          </FilterLink>
          <FilterLink
            sortType='BEST_MATCH'
            handleClose={this.handleClose}
          >
            <StyledBestMatch pos="left" />
            Best Match
          </FilterLink>
          <FilterLink
            sortType='END_SOON'
            handleClose={this.handleClose}
          >
            <StyledEndSoon pos="left" />
            End Soon
          </FilterLink>
          <FilterLink
            sortType='PRICE_ASC'
            handleClose={this.handleClose}
          >
            <StyledSortAsc pos="left" />
            Price Ascd.
          </FilterLink>
          <FilterLink
            sortType='PRICE_DESC'
            handleClose={this.handleClose}
          >
            <StyledSortDesc pos="left" />
            Price Dscd.
          </FilterLink>
        </Menu>
      </StyledRoot>
    );
  }
}

export default FilterBar;
