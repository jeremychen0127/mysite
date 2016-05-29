import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class Navbar extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleActive(tab) {
    console.log(tab);
    FlowRouter.go(tab.props.value);
  }

  render() {
    return (
      <Tabs>
        <Tab label="Projects" value="projects" onActive={this.handleActive.bind(this)}/>
        <Tab label="About Me" value="about" onActive={this.handleActive.bind(this)}/>
        <Tab label="Resume" value="resume" onActive={this.handleActive.bind(this)}/>
      </Tabs>
    );
  }
}

Navbar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};