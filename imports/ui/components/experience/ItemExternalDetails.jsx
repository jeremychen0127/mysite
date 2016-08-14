import React, { Component } from 'react';

export default class Expandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      maxHeight: '500px',
    };

    this.handleResize = (event) => {
      if (window.innerWidth >= 1350) {
        this.setState({maxHeight: '200px'});
      } else if (window.innerWidth >= 1000) {
        this.setState({maxHeight: '300px'});
      } else {
        this.setState({maxHeight: '500px'});
      }
      this.setState({windowWidth: window.innerWidth});
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="hoverable" style={{borderRadius: '20px'}}>
        <div className="z-depth-2 experienceExpandable">
          <div style={{cursor: 'pointer'}} onClick={this.toggleExpand}>
            <img src={this.props.imgSrc}
                 width={this.props.imgWidth}
                 height={this.props.imgHeight}
                 style={{borderRadius: '10px'}}/>
            <div className="center hide-on-large-only" style={{marginTop: this.props.marginBelowPic + 'px'}}>
              <a style={{color: '#455a64', fontFamily: 'Patua One, cursive'}}>View Details</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Expandable.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  imgHeight: React.PropTypes.number.isRequired,
  imgWidth: React.PropTypes.number.isRequired,
  marginBelowPic: React.PropTypes.number.isRequired,
};

Expandable.defaultProps = {
  marginBelowPic: 0,
  imgHeight: 160,
  imgWidth: 400
};