import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <a className="logo">DevOps Dashboard</a>
        </div>
        <hr />
        <br />
      </div>
    );
  }
}
