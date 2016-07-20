import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  inputField: {
    fontSize: '16px',
  },
  inputDiv: {
    paddingRight: '30px',
  }
};

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleNameChange = (event) => this.setState({name: event.currentTarget.value});
    this.handleEmailChange = (event) => this.setState({email: event.currentTarget.value});
    this.handleMessageChange = (event) => this.setState({message: event.currentTarget.value});

    this.handleSubmit = (event) => {
      event.preventDefault();

      this.setState({name: '', email: '', message: ''});
    }
  }

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
          <div className="col offset-s1 s10 offset-m2 m4 offset-l3 l3" style={styles.inputDiv}>
            <label htmlFor="name" className="input-label">Your Name</label>
            <input id="name" type="text" placeholder="e.g. Larry Page" className="validate"
                   value={this.state.name} onChange={this.handleNameChange} style={styles.inputField}/>
          </div>
          <div className="col offset-s1 s10 m4 l3" style={styles.inputDiv}>
            <label htmlFor="email" className="input-label">Your Email</label>
            <input id="email" type="email" placeholder="e.g. LarryPage@gmail.com" className="validate"
                   value={this.state.email} onChange={this.handleEmailChange} style={styles.inputField}/>
          </div>
        </div>
        <div className="row" style={{marginBottom: '0px'}}>
          <div className="col offset-s1 s10 offset-m2 m6 offset-l3 l4" style={styles.inputDiv}>
            <label htmlFor="message" className="input-label">Message</label>
            <textarea id="message" className="materialize-textarea" value={this.state.message}
                      onChange={this.handleMessageChange} style={styles.inputField}/>
          </div>
          <div className="col s12 m2 l2">
            <div className="center" style={{paddingTop: '40px'}}>
              <RaisedButton label="Send" onClick={this.handleSubmit}/>
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