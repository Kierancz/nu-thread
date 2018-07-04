import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import { Menu } from 'mdi-material-ui';
import styled from 'styled-components';

import { NavLinks } from './navLinks';
import Logo from '../Logo';

// import { NavLink } from 'react-router-dom'; 

const StyledChildren = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin-top: 4em;
`;

const drawerWidth = 200;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'fixed',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: 'white'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: 'black'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class SideNav extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, bar, children } = this.props;

    const drawer = (
      <div style={{textAlign: 'center'}}>
        { Logo }
        <Divider />
        <List>
          { NavLinks }
        </List>
      </div>
    );

    const controlBar = (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open sidenav"
            onClick={this.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <Menu />
          </IconButton>
          { bar }
        </Toolbar>
      </AppBar>
    );

    return (
      <div className={classes.root}>
        { bar? controlBar : null }
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            { drawer }
          </Drawer>
          { controlBar }
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <StyledChildren id="sidenav-content">
          { children }
        </StyledChildren>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideNav);