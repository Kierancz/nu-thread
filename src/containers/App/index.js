import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;