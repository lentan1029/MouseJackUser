import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var script = document.createElement('script');
    script.src = 'http://138.68.49.22:3000/public/renderd3.js';
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="Nav" id="nav">
      </div>
    );
  }
}

export default Nav;