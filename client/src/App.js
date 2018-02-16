import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to newSentinel</h2>
        </div>
        <p className="App-intro">
          To get started, press <code><button className='btn btn-secondary'>Scrape</button></code>
        </p>
      </div>
    );
  }
}

export default App;
