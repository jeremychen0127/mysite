import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  borderRadius: '20px',
  color: '#455a64',
};

export default class UnderContruction extends Component {
  render() {
    return (
      <div className="row">
        <div className="col offset-m2 m8 s12">
          <div className="center">
            <Paper zDepth={4} style={style}>
              <br />
              <br />
              <h4>Coming Soon!</h4>
              <h4>Stay Tuned!</h4>
              <br />
              <br />
            </Paper>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}