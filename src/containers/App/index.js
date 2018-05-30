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
    return (
      <div className="App">
        <SideNav>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/items' component={ItemsControlBar} />
          <Route exact path='/items' component={Items} />
        </SideNav>

        {/* {React.cloneElement(this.props.children, this.props)} */}
      </div>
    );
  }
}

export default App;