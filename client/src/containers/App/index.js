import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';
import NotFound from '../NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/items' component={Items} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;