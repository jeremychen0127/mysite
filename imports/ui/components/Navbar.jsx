import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class TopNavbar extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    let appBarStyle = {
      backgroundColor: '#78909c'
    };
    return (
      <div className="navbar">
        <ul>
          <li><a id="logo" href="/">Jeremy Chen</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/experience">Experience</a></li>
        </ul>
      </div>
    );
  }
}

TopNavbar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};