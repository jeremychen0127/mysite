import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  inputField: {
    fontSize: '14px',
  },
  inputDiv: {
    paddingRight: '30px',
  }
};

export default class Footer extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="contact-me">
        <br />
        <div className="center">
          <h3>Contact Me</h3>
        </div>
        <br />
        <div className="row">
          <div className="col m4 offset-m2" style={styles.inputDiv}>
            <label htmlFor="name" className="input-label">Your Name</label>
            <input id="name" type="text" placeholder="e.g. Larry Page" className="validate" style={styles.inputField}/>
          </div>
          <div className="col m4" style={styles.inputDiv}>
            <label htmlFor="email" className="input-label">Your Email</label>
            <input id="email" type="email" placeholder="e.g. LarryPage@gmail.com" className="validate" style={styles.inputField}/>
          </div>
        </div>
        <div className="row" style={{marginBottom: '0px'}}>
          <div className="col offset-m2 m6">
            <label htmlFor="message" className="input-label">Message</label>
            <textarea id="message" className="materialize-textarea" style={styles.inputField}/>
          </div>
          <div className="col m2">
            <div className="center" style={{paddingTop: '40px'}}>
              <RaisedButton label="Send" />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

Footer.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};