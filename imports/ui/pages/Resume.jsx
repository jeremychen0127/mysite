import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import MyResume from '../components/resume/Resume';

export default class Resume extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div>
        <MyResume />
      </div>
    );
  }
}

Resume.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};