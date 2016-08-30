/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(direction) {

    var data = {
      x: 0,
      y: 0
    };

    if (direction === 'left') {
      data.x += -10;
    } else if (direction === 'right') {
      data.x += 10;
    } else if (direction === 'up') {
      data.y += -10;
    } else if (direction === 'down') {
      data.y += 10;
    } else {
      throw new Error('direction not valid');
    }

    $.ajax({
      type: 'POST',
      // dataType: 'json',
      contentType: 'application/json',
      url: 'http://138.68.49.22:3000/user',
      data: JSON.stringify(data),
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
