import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router'

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftNavOpen: false,
    };

    this.handleLeftNavToggle = (event) => {
      event.preventDefault();
      this.setState({leftNavOpen: !this.state.leftNavOpen});
    }
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  isActive(routeName) {
    if (this.props.currentRoute === routeName) {
      return 'active';
    }

    return ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({leftNavOpen: false});
  }

  renderLeftNav() {
    return (
      <Drawer open={this.state.leftNavOpen} docked={false}
              onRequestChange={(open, reason) => { this.setState({leftNavOpen:open}) }}
              width={200} style={{zIndex:9999}}>
        <MenuItem linkButton={true} href="/profile" primaryText="Profile"
                  leftIcon={<FontIcon className="material-icons">account_box</FontIcon>}/>
        <MenuItem linkButton={true} href="/experience" primaryText="Experience"
                  leftIcon={<FontIcon className="material-icons">build</FontIcon>}/>
        <Divider />
        <MenuItem linkButton={true} href="/resume" primaryText="Resume"
                  leftIcon={<FontIcon className="material-icons">assignment</FontIcon>}/>
      </Drawer>
    );
  }

  render() {
    return (
      <div className="navbar">
        <ul>
          <div className="hide-on-large-only">
            <li>
              <IconButton iconStyle={{marginTop: '5px'}} onTouchTap={this.handleLeftNavToggle}>
                <FontIcon color="white" className="material-icons">menu</FontIcon>
              </IconButton>
            </li>
          </div>

          <div>
            <li><a id="logo" href="/">Jeremy Chen</a></li>
          </div>

          <div className="hide-on-med-and-down">
            <li className={this.isActive('profile')}><a href="/profile">Profile</a></li>
            <li className={this.isActive('experience')}><a href="/experience">Experience</a></li>
            <li className={"right " + this.isActive('resume')}><a href="/resume">Resume</a></li>
          </div>
        </ul>
        {this.renderLeftNav()}
      </div>
    );
  }
}

Navbar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  return { currentRoute: FlowRouter.getRouteName() };
}, Navbar);