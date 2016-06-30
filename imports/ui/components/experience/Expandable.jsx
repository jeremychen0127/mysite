import React, { Component } from 'react';

export default class Expandable extends Component {
  render() {
    return (
        <div className="experienceExpandable">
          <img src={this.props.imgSrc} width="400" height="120"/>
          <div className="expDescription">
            <div className="row">
              <div className="col m8 offset-m2 s10 offset-s1">
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Expandable.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};