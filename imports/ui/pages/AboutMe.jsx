import React, { Component } from 'react';
import { Chart } from 'meteor/chart:chart';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';

var style = {
  reducedBottomMargin: {
    marginBottom: '10px'
  },
};

export default class AboutMe extends Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  componentDidUpdate(prevProps, prevState) {
      this.renderChart();
  }

  renderChart() {
    setTimeout(function () {
      var ctx = $("#myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }, 50);
  }

  renderContacts() {
    return (
      <div className="hoverable">
        <Paper zDepth={4}>
          <br />
          <div className="row center">
            <i className="material-icons medium about-me-section-icon">phone</i>
            <b>Contacts</b>
          </div>
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m4 offset-m4 s8 offset-s2">
              <i className="material-icons small contact-info-icon">email</i>
              JeremyChen0127@gmail.com
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4 s8 offset-s2">
              <i className="material-icons small contact-info-icon">phonelink_ring</i>
              +1 (226) 978-5759
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderWhoAmI() {
    return (
      <div className="hoverable center">
        <Paper zDepth={4}>
          <br />
          <div className="row">
            <i className="material-icons about-me-section-icon medium">person</i>
            <b>Who Am I?</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <p>
                I am a geek who is fascinated by algorithms. Algorithmic thinking has become a huge part of my life.
                Looking for a better algorithm to solve everyday problems can be fun to me.
              </p>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderBecameGeek() {
    return (
      <div className="hoverable center">
        <Paper zDepth={4}>
          <br />
          <div className="row">
            <i className="material-icons about-me-section-icon medium" style={{marginRight: '10px'}}>important_devices</i>
            <b>How I Became a Geek</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <p>
                I had no idea what programming was before I started my university.
                However, after I have been taught data structures, algorithms, and logic of programming,
                I totally fell in love with them. I started my geek journey since then.
                Now, anything that shows up related to tech will draw my full attention.
                That is when I found myself becoming a geek.
              </p>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  renderWhatIDo() {
    return (
      <div className="hoverable center">
        <Paper zDepth={4}>
          <br />
          <div className="row">
            <i className="material-icons about-me-section-icon medium" style={{marginRight: '10px'}}>toys</i>
            <b>What I Usually Do</b>
          </div>
          <div className="row">
            <div className="col m8 offset-m2 s10 offset-s1">
              <canvas id="myChart" width="400" height="400"></canvas>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="col offset-m2 m8 s12">
            {this.renderWhoAmI()}
            <br />
            {this.renderBecameGeek()}
            <br />
            {this.renderWhatIDo()}
          </div>
        </div>
      </div>
    );
  }
}

AboutMe.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};