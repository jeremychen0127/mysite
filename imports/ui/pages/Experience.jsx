import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

import FlipCard from '../components/experience/FlipCard';

import Divider from 'material-ui/Divider';

// TODO: fetch from DB
const miovisionDescription =
  "I am working in a new project initiated by the management and organizational development teams. " +
  "We see that the current market lacks of a system to manage and structure your company/organization well." +
  "That leads to the birth of Teal. It is a system that not only has OKR and HR functionality but also " +
  "acts like an internal LinkedIn and Facebook. I am very passionate about the project and have implemented " +
  "a lot of main features.";



export default class Experience extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="experience center fadeIn">
        <div>
          <h2 className="title center">Experience</h2>
          <p className="quote center"><i>"Practice does not make perfect, perfect practice makes perfect" - Vince Lombardi</i></p>
        </div>
        <br />
          <div className="row">
            <div className="center">
              <FlipCard
                imgSrc="/img/miovision.png"
                description={miovisionDescription} />
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