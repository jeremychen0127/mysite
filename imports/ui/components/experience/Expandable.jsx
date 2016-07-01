import React, { Component } from 'react';

export default class Expandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpand: false,
    };

    this.toggleExpand = () => this.setState({isExpand: !this.state.isExpand});
  }

  render() {
    return (
        <div className="experienceExpandable">
          <img src={this.props.imgSrc} width="400" height="120" style={{cursor: 'pointer'}} onClick={this.toggleExpand}/>
          <div className="expDescription" style={{maxHeight: this.state.isExpand ? '500px' : '0px'}}>
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