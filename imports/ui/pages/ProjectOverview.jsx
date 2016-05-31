import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

export default class ProjectOverview extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
      <div className="center">
        <br />
        <UnderConstruction />
      </div>
    );
  }
}

ProjectOverview.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};