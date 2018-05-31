import React, { Component } from 'react';
import './App.css';
import SideNav from '../../components/SideNav';
import { Route } from 'react-router';
import Home from '../Home';
import About from '../About';
import Items from '../Items';
import ItemsControlBar from '../../components/ItemsControlBar';

//import StyledBackground from '../../components/Styled/background';

class App extends Component {
  render() {
    const bar = (
      <div style={{width: '100%'}}>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} /> */}
        <Route exact path='/items' component={ItemsControlBar} />
      </div>
    );
    return (
      <div className="App">
        <SideNav bar={bar}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/items' component={Items} />
        </SideNav>
      </div>
    );
  }
}

export default App;