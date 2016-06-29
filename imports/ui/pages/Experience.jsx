import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

import FlipCard from '../components/experience/FlipCard';

import Divider from 'material-ui/Divider';

export default class Experience extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="center fadeIn">
        <br />
          <div className="row">
            <div className="center">
              <FlipCard
                imgSrc="/img/miovision.png"
                description="Miovision Description" />
            </div>
          </div>
          <br />
          <Divider />
          <br />
          <div className="row">
            <FlipCard
              imgSrc="/img/dematic.png"
              description="Dematic Description" />
          </div>
          <br />
          <Divider />
          <br />
          <div className="row">
            <FlipCard
              imgSrc="/img/ncr.png"
              description="NCR Description" />
          </div>
        <br />
      </div>
    );
  }
}

Experience.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};