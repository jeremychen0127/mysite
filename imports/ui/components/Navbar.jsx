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

const styles = {
  leftNavMenuItem: {
    fontFamily: 'Patua One, cursive',
    color: '#455a64',
  },

  leftNavMenuItemIcon: {
    color: '#546e7a',
  },

  leftNavMenuItemMobile: {
    fontSize: '25px',
    fontFamily: 'Patua One, cursive',
    height: '70px',
    paddingTop: '10px',
    color: '#455a64',
  },

  leftNavMenuItemMobileIcon: {
    fontSize: '30px',
    marginTop: '8px',
    color: '#546e7a',
  }
};

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
      <div >
        <Drawer open={this.state.leftNavOpen} docked={false} className="hide-on-small-and-down"
                onRequestChange={(open, reason) => { this.setState({leftNavOpen:open}) }}
                width={200} style={{zIndex:9999}}>

            <MenuItem style={styles.leftNavMenuItem} linkButton={true} href="/profile" primaryText="Profile"
                      leftIcon={<FontIcon style={styles.leftNavMenuItemIcon} className="material-icons">account_box</FontIcon>}/>
            <MenuItem style={styles.leftNavMenuItem} linkButton={true} href="/experience" primaryText="Experience"
                      leftIcon={<FontIcon style={styles.leftNavMenuItemIcon} className="material-icons">build</FontIcon>}/>
            <Divider />
            <MenuItem style={styles.leftNavMenuItem} linkButton={true} href="/resume" primaryText="Resume"
                      leftIcon={<FontIcon style={styles.leftNavMenuItemIcon} className="material-icons">assignment</FontIcon>}/>
        </Drawer>

        <Drawer open={this.state.leftNavOpen} docked={false} className="hide-on-med-and-up"
                onRequestChange={(open, reason) => { this.setState({leftNavOpen:open}) }}
                width={250} style={{zIndex:9999}}>
          <MenuItem style={styles.leftNavMenuItemMobile} linkButton={true} href="/profile" primaryText="Profile"
                    leftIcon={<FontIcon style={styles.leftNavMenuItemMobileIcon} className="material-icons">account_box</FontIcon>}/>
          <MenuItem style={styles.leftNavMenuItemMobile} linkButton={true} href="/experience" primaryText="Experience"
                    leftIcon={<FontIcon style={styles.leftNavMenuItemMobileIcon} className="material-icons">build</FontIcon>}/>
          <Divider />
          <MenuItem style={styles.leftNavMenuItemMobile} linkButton={true} href="/resume" primaryText="Resume"
                    leftIcon={<FontIcon style={styles.leftNavMenuItemMobileIcon} className="material-icons">assignment</FontIcon>}/>

        </Drawer>
      </div>
    );
  }

  render() {
    return (
      <div className="navbar">
        <ul>
          <div className="hide-on-large-only">
            <div className="hide-on-med-and-up">
              <li>
                <i className="material-icons"
                   style={{color: 'white', cursor: 'pointer', fontSize: '45px', margin: '20px'}}
                   onClick={this.handleLeftNavToggle}>
                  menu
                </i>
              </li>
              <li style={{marginTop: '10px', float: 'right'}}><a id="logo" href="/" style={{fontSize: '25px'}}>Jeremy Chen</a></li>
            </div>

            <div className="hide-on-small-and-down">
              <li style={{marginTop: '5px', marginLeft: '10px'}}>
                <i className="material-icons"
                   style={{color: 'white', cursor: 'pointer', fontSize: '30px', margin: '10px'}}
                   onClick={this.handleLeftNavToggle}>
                  menu
                </i>
              </li>
              <li style={{float: 'right'}}><a id="logo" href="/" style={{fontSize: '20px'}}>Jeremy Chen</a></li>
            </div>
          </div>

          <div className="hide-on-med-and-down">
            <li><a id="logo" href="/">Jeremy Chen</a></li>
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