import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class UnderContruction extends Component {
  render() {
    return (
      <div className="row">
        <div className="col offset-m2 m8 s12">
          <div className="center">
            <Paper zDepth={4}>
              <br />
              <br />
              <h2>Coming Soon!</h2>
              <h2>Stay Tuned!</h2>
              <br />
              <br />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}