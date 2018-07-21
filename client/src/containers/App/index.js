import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/items' component={Items} />
      </div>
    );
  }
}

export default App;