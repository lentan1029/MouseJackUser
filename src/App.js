/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(direction) {
    $.ajax({
      type: 'POST',
      url: 'http://138.68.49.22:3000/user',
      data: JSON.stringify({
        x: 10,
        y: 10
      }),
      success: function(data) {
        console.log(data);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MouseJackUser
          </h1>
        </div>
        <div onClick={this.handleClick.bind(this, 'left')} className="leftArrow">
          left
        </div>
        <div onClick={this.handleClick.bind(this, 'right')} className="rightArrow">
          right
        </div>
        <div onClick={this.handleClick.bind(this, 'up')} className="upArrow">
          up
        </div>
        <div onClick={this.handleClick.bind(this, 'down')} className="downArrow">
          down
        </div>
      </div>
    );
  }
}

export default App;
