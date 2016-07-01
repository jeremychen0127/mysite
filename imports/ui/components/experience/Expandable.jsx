import React, { Component } from 'react';

export default class Expandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpand: false,
      windowWidth: window.innerWidth,
      maxHeight: '500px',
    };

    this.toggleExpand = () => this.setState({isExpand: !this.state.isExpand});
    this.handleResize = (event) => {
      if (window.innerWidth >= 1350) {
        this.setState({maxHeight: '200px'});
      } else if (window.innerWidth >= 1000) {
        this.setState({maxHeight: '300px'});
      } else {
        this.setState({maxHeight: '500px'});
      }
      this.setState({windowWidth: window.innerWidth});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
        <div className="experienceExpandable">
          <img src={this.props.imgSrc} width="400" height="120" style={{cursor: 'pointer'}} onClick={this.toggleExpand}/>
          <div className="expDescription" style={{maxHeight: this.state.isExpand ? this.state.maxHeight : '0px'}}>
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