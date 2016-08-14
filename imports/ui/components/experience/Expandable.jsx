import React, { Component } from 'react';

export default class Expandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpand: props.isExpand,
      windowWidth: window.innerWidth,
      maxHeight: '500px',
    };

    this.toggleExpand = () => {
      // disable expandable for large screens
      if (this.state.windowWidth > 992) {
        return false;
      }

      this.setState({isExpand: !this.state.isExpand});

      if (!this.state.isExpand) {
        this.props.handleExpandingSectionChange(this.props.imgSrc);
      }
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

  componentWillReceiveProps(nextProps) {
    this.setState({isExpand: nextProps.isExpand});
  }

  render() {
    return (
      <div className="hoverable" style={{borderRadius: '20px'}}>
        <div className="z-depth-2 experienceExpandable">
          <div style={{cursor: 'pointer'}} onClick={this.toggleExpand}>
            <img src={this.props.imgSrc}
                 width={400}
                 height={140}
                 style={{borderRadius: '10px'}}/>
            <div className="center hide-on-large-only" style={{marginTop: this.props.marginBelowPic + 'px'}}>
              <a style={{color: '#455a64', fontFamily: 'Patua One, cursive'}}>{this.state.isExpand ? 'Hide' : 'Show'} Details</a>
            </div>
          </div>
          <div className="expDescription" style={{maxHeight: this.state.isExpand ? this.state.maxHeight : '0px'}}>
            <div className="row">
              <div className="col m8 offset-m2 s10 offset-s1">
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Expandable.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  handleExpandingSectionChange: React.PropTypes.func.isRequired,
  isExpand: React.PropTypes.bool.isRequired,
  marginBelowPic: React.PropTypes.number.isRequired,
};

Expandable.defaultProps = {
  marginBelowPic: 0,
};