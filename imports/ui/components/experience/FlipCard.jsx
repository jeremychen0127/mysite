import React, { Component } from 'react';

export default class FlipCard extends Component {
  render() {
    return (
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="side">
            <img src={this.props.imgSrc} width="400" height="150"/>
          </div>
          <div className="side back">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

FlipCard.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};