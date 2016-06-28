import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

import FlipCard from '../components/experience/FlipCard';

export default class Experience extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="center fadeIn">
        <br />
          <div className="row">
            <div className="col offset-m2 m4 s12">
              <FlipCard
                imgSrc="/img/ncr.png"
                description="NCR Description" />
            </div>
            <div className="col m4 s12">
              <FlipCard
                imgSrc="/img/dematic.png"
                description="Dematic Description" />
            </div>
          </div>
          <div className="row">
            <div className="col offset-m2 m4 s12">
              <FlipCard
                imgSrc="/img/miovision.png"
                description="Miovision Description" />
            </div>
          </div>
        <br />
      </div>
    );
  }
}

Experience.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};