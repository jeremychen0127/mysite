import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

import Paper from 'material-ui/Paper';

export default class ProjectOverview extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="center fadeIn">
        <br />
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="side">
                <img src="/img/ncr.jpg" width="400" height="150"/>
              </div>
              <div className="side back">
                NCR Description
              </div>
            </div>
          </div>
        <br />
      </div>
    );
  }
}

ProjectOverview.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};