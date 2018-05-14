import React from 'react';
import FilterLink from '../../containers/FilterLink';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { MenuList } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { Sort, SortAscending, SortDescending } from 'mdi-material-ui'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  popperClose: {
    pointerEvents: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

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
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <span className={classes.root}>
        <Manager>
          <Target>
            <Button
              aria-owns={open ? 'filter-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Sort className={classes.leftIcon}/>
              Sort
            </Button>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="filter-menu" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList>
                    <FilterLink
                      filter='SHOW_ALL'
                      handleClose={this.handleClose}>
                      Default
                    </FilterLink>
                    <FilterLink
                      filter='PRICE_ASC'
                      handleClose={this.handleClose}>
                      Price
                      <SortAscending className={classes.rightIcon}/>
                    </FilterLink>
                    <FilterLink
                      filter='PRICE_DESC'
                      handleClose={this.handleClose}>
                      Price
                      <SortDescending className={classes.rightIcon}/>
                    </FilterLink>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </span>
    );
  }
}

FilterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterBar);
