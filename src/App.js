/*jshint esversion: 6 */

import React, { Component } from 'react';
import Nav from './Nav.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">MouseJackUser</h1>
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
