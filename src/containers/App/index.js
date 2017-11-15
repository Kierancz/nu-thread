import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import About from '../About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;

/*(
      <div className="App">
        <Navbar/>
        <Router>
          <div>
            <header>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
            </header>

            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={About} />
            </main>
          </div>
        </Router>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    );*/