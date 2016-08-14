import React, { Component } from 'react';
import { Chart } from 'meteor/chart:chart';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';

const ReactHighcharts = require('react-highcharts');
var Highcharts = require('highcharts');

var styles = {
  reducedBottomMargin: {
    marginBottom: '10px'
  },
  noBottomMargin: {
    marginBottom: '0px'
  },
  paperSpacingBottom: {
    marginBottom: '20px'
  },
  whoAmICard: {
    backgroundColor: '#e3f2fd',
    color: '#455a64',
    borderRadius: '20px',
    fontFamily: 'Patua One, cursive',
  },
  interestCard: {
    backgroundColor: '#f1f0e6',
    color: '#455a64',
    borderRadius: '20px',
    fontFamily: 'Patua One, cursive',
  },
  becameGeekCard: {
    backgroundColor: '#e8eaf6',
    color: '#455a64',
    borderRadius: '20px',
    fontFamily: 'Patua One, cursive',
  },
  usuallyDoCard: {
    backgroundColor: '#efebe9',
    color: '#455a64',
    borderRadius: '20px',
    fontFamily: 'Patua One, cursive',
  },
};

Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
  return {
    radialGradient: {
      cx: 0.5,
      cy: 0.3,
      r: 0.7
    },
    stops: [
      [0, color],
      [1, Highcharts.Color(color).brighten(-0.5).get('rgb')] // darken
    ]
  };
});

const config = {
  chart: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    plotBackgroundColor: 'transparent',
    plotBorderColor: 'transparent',
    plotBorderWidth: 'inherit',
    plotShadow: false,
    margin: [0, 30, 100, 30],
    type: 'pie',
  },
  tooltip: {
    pointFormat: '<b>{point.percentage:.1f}%</b>'
  },
  title:{
    text:''
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      startAngle: 15,
      showInLegend: true
    }
  },
  legend: {
    itemMarginBottom: 10,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Time',
    colorByPoint: true,
    data: [{
      name: 'Working / Coding',
      y: 60.65,
      sliced: true,
      selected: true
    }, {
      name: 'Browsing Tech Articles / Quora',
      y: 25
    }, {
      name: 'Watching Detective Dramas',
      y: 6.45
    }, {
      name: 'Family & Friends',
      y: 7.9
    }]
  }]
};

export default class Profile extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  renderChart() {
    return <ReactHighcharts config={config}></ReactHighcharts>
  }

  renderWhoAmI() {
    return (
      <div className="hoverable center" style={{borderRadius: '20px'}}>
        <Paper zDepth={4} style={styles.whoAmICard}>
          <br />
          <div className="row" style={styles.noBottomMargin}>
            <i className="material-icons about-me-section-icon" style={{fontSize: '3rem'}}>person</i>
            <b>Who Am I?</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <p>
                I am a geek who is fascinated by algorithms. Algorithmic thinking has become a huge part of my life.
                Looking for a better algorithm to solve everyday problems can be fun to me.
                You ask, what do I do other than tech stuff? I love any dramas about detectives.
                Taking guesses who are the criminals is also extremely fun to me!
              </p>
              <br />
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderBecameGeek() {
    return (
      <div className="hoverable center" style={{borderRadius: '20px'}}>
        <Paper zDepth={4} style={styles.becameGeekCard}>
          <br />
          <div className="row" style={styles.noBottomMargin}>
            <i className="material-icons about-me-section-icon" style={{marginRight: '10px', fontSize: '3rem'}}>important_devices</i>
            <b>How I Became a Geek</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <p>
                I had no idea what programming was before I started my university.
                However, after I was taught data structures, algorithms, and logic of programming,
                I totally fell in love with them. I started my geek journey since then.
                Now, anything that shows up related to tech will draw my full attention.
                That is when I found myself becoming a geek.
              </p>
              <br />
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderInterests() {
    return (
      <div className="hoverable center" style={{borderRadius: '20px'}}>
        <Paper zDepth={4} style={styles.interestCard}>
          <br />
          <div className="row" style={styles.noBottomMargin}>
            <i className="material-icons about-me-section-icon" style={{marginRight: '10px', fontSize: '3rem'}}>favorite</i>
            <b>Interests</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <ul>
                <li>Software Architecture and Design</li>
                <li>Backend Development</li>
                <li>Artificial Intelligence</li>
              </ul>
              <br />
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderWhatIDo() {
    return (
      <div className="hoverable center" style={{borderRadius: '20px'}}>
        <Paper zDepth={4} style={styles.usuallyDoCard}>
          <br />
          <div className="row" style={styles.noBottomMargin}>
            <i className="material-icons about-me-section-icon" style={{marginRight: '10px', fontSize: '3rem'}}>toys</i>
            <b>What I Usually Do</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <p>
                Yeah...of course this does not include sleeping, meals, blah blah blah...<br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="center" style={{width: 'inherit'}}>
              {this.renderChart()}
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  render() {
    return (
      <div className="about-me fadeIn">
        <div>
          <h2 className="title center">Profile</h2>
          <p className="quote center"><i>Algorithmic thinking is not a study but a lifestyle</i></p>
        </div>
        <br />
        <div className="row" style={styles.noBottomMargin}>
          <div className={"col offset-m1 m10 s12 " + ($(window).innerWidth() >= 1400 ? "l6" : "")} style={styles.noBottomMargin}>
            {this.renderWhoAmI()}
            {this.renderBecameGeek()}
          </div>
          <div className={"col offset-m1 m10 s12 " + ($(window).innerWidth() >= 1400 ? "l6" : "")} style={styles.paperSpacingBottom}>
            {this.renderInterests()}
            {this.renderWhatIDo()}
          </div>
        </div>
      </div>
    );
  }
}

Profile.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};