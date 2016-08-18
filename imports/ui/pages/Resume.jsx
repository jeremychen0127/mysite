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
        <div className="center">
          <a href="files/Jeremy-Chen.pdf" download style={{marginRight: '50px'}}>
            <RaisedButton
              label="Download PDF"
              backgroundColor="#7294a2"
              labelColor="white"
              labelPosition="before"
              icon={<FontIcon className="material-icons">file_download</FontIcon>} />
          </a>
          <a href="files/Jeremy-Chen.pdf" target="_blank">
            <RaisedButton
              label="View PDF"
              backgroundColor="#7294a2"
              labelColor="white"
              labelPosition="before"
              icon={<FontIcon className="material-icons">open_in_new</FontIcon>} />
          </a>
        </div>
        <br />
        <MyResume />
      </div>
    );
  }
}

Resume.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};