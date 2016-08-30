import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var script = document.createElement('script');
    script.src = 'https://rawgit.com/lentan1029/test/master/test.js';
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