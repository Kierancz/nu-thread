import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import SideNav from '../../components/SideNav';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';
//import StyledBackground from '../../components/Styled/background';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  text-transform: lowercase;
  margin-left: 1em;
`;
const StyledLogoText = styled.span`
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

class App extends Component {
  render() {
    const logo = (
      <StyledLink to="/">
        <StyledLogoText>
          nu-thread
        </StyledLogoText>
      </StyledLink>
    );
    const links = (
      <div>
        <StyledLink to="/about">
          About
        </StyledLink>
        <StyledLink to="/items">
          Items
        </StyledLink>
      </div>
    );
    return (
      <div className="App">
        {/* <Navbar /> */}
        <SideNav 
          logo={logo} 
          navItems={links} 
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/items' component={Items} />
        </SideNav>

        {/* {React.cloneElement(this.props.children, this.props)} */}
      </div>
    );
  }
}

export default App;