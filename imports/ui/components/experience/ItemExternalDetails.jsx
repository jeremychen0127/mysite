import React, { Component } from 'react';

export default class ItemExternalDetails extends Component {
  render() {
    return (
      <div className="hoverable" style={{borderRadius: '20px'}}>
        <div className="z-depth-2 experienceExpandable">
          <a style={{cursor: 'pointer'}} href={this.props.link} target="_blank">
            <img src={this.props.imgSrc}
                 width={this.props.imgWidth}
                 height={this.props.imgHeight}
                 style={{borderRadius: '10px'}}/>
            <div className="center" style={{marginTop: this.props.marginBelowPic + 'px'}}>
              <div style={{color: '#455a64', fontFamily: 'Patua One, cursive'}}>
                <div style={{fontSize: '25px'}}>{this.props.title}</div>
                <div style={{fontSize: '20px', textDecoration: 'underline'}}>Learn More @ Github</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

ItemExternalDetails.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  imgHeight: React.PropTypes.number.isRequired,
  imgWidth: React.PropTypes.number.isRequired,
  marginBelowPic: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

ItemExternalDetails.defaultProps = {
  marginBelowPic: 0,
  imgHeight: 160,
  imgWidth: 400
};