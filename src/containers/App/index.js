import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';
import Login from '../Login';
//import StyledBackground from '../../components/Styled/background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/items' component={Items} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

export default App;