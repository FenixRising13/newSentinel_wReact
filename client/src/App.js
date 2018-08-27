import React, { Component } from 'react';
import './App.css';
import Articles from "./components/Articles/Articles.js";
import Article from "./components/Article/Article.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to newSentinel</h2>
          <h5>Get Started:</h5><button className='btn btn-secondary'>Scrape</button>
        </div>
        <p className="App-intro">
          This is where articles will be.
        </p>
        {Articles};
        {Article};
      </div>
    );
  }
}

export default App;
