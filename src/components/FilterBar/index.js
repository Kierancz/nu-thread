import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { Button } from '@material-ui/core';
import { MenuList } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import styled from 'styled-components';

import { Sort, SortAscending, SortDescending } from 'mdi-material-ui'

const StyledRoot = styled.span`
  display: flex;
`;
const StyledPopper = styled(Popper)`
  pointer-events: 'none';
`;
const StyledSort = styled(Sort)`
  margin-right: 0.5em;
`;
const StyledSortDesc = styled(SortDescending)`
  margin-left: 0.5em;
`;
const StyledSortAsc = styled(SortAscending)`
  margin-left: 0.5em;
`;

class FilterBar extends React.Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <StyledRoot>
        <Manager>
          <Target>
            <Button
              aria-owns={open ? 'filter-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <StyledSort />
              Sort
            </Button>
          </Target>
          <StyledPopper
            placement="bottom-start"
            eventsEnabled={open}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="filter-menu" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList>
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
                      Best Match
                    </FilterLink>
                    <FilterLink
                      sortType='END_SOON'
                      handleClose={this.handleClose}
                    >
                      Ending Soon
                    </FilterLink>
                    <FilterLink
                      sortType='PRICE_ASC'
                      handleClose={this.handleClose}
                    >
                      Price
                      <StyledSortAsc />
                    </FilterLink>
                    <FilterLink
                      sortType='PRICE_DESC'
                      handleClose={this.handleClose}
                    >
                      Price
                      <StyledSortDesc />
                    </FilterLink>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </StyledPopper>
        </Manager>
      </StyledRoot>
    );
  }
}

export default FilterBar;
