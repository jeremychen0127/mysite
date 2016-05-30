import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

export default class AboutMe extends Component {
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

AboutMe.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};