import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ItemExternalDetails from '../components/experience/ItemExternalDetails';

export default class Projects extends Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="experience center fadeIn">
        <div>
          <h2 className="title center">Projects</h2>
          <p className="quote center"><i>"The purpose of life is to contribute in some way to making things better" - Robert F. Kennedy</i></p>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/sim4chat.png"
              title="Simple 4 Chat Messaging App"
              link="https://github.com/jeremychen0127/Simple4Chat"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/tic-tac-toe.png"
              marginBelowPic={20}
              title="Tic-Tac-Toe with Unbeatable AI Player"
              link="https://github.com/jeremychen0127/Tic_Tac_Toe"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/tote.png"
              imgHeight={200}
              marginBelowPic={20}
              title="Tote - Personal Stylist"
              link="https://github.com/jeremychen0127/tote"/>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

Projects.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};