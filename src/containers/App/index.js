import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';
//import StyledBackground from '../../components/Styled/background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/items' component={Items} />
        </div>

        {/* {React.cloneElement(this.props.children, this.props)} */}
      </div>
    );
  }
}

export default App;