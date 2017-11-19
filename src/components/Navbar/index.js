import React from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
//import IconButton from 'material-ui/IconButton';
//import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    width: '100%',
  },
  bar: {
    background: '#000',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    textTransform: 'lowercase'
  },
  center: {
    display: 'block',
    margin: '0 auto',
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <div className={classes.center}>
            <Link to="/" className={classes.link}>
              <Typography type="title" color="inherit" className={classes.flex}>
                nu-thread
              </Typography>
            </Link>
            <Button className={classes.button}>
              <Link to="/about" className={classes.link}>About</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
