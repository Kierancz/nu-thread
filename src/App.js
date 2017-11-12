import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <h1 className="App-title">Welcome to nu-thread!</h1>
        </header>
        {React.cloneElement(this.props.children, this.props)}
        
        <p className="App-intro">
          Affordable, high quality/durability, and carbon neutral clothes! 
        </p>
      </div>
    );
  }
}

export default App;
