import React, { Component } from 'react';
import Logo from '../Logo.jsx';

var style = {
  reducedBottomMargin: {
    marginBottom: '7px'
  },
  entryTitleStyle: {
    paddingLeft: '0px'
  }
};

export default class Resume extends Component {
  renderSummaryOfQualifications() {
    return (
      <div>
        <div className="row">
          <div className="section-title z-depth-2">
            <h5><b>Summary of Qualifications</b></h5>
          </div>
        </div>

        <div className="row">
          <div className="col m6 s12 skill-set">
            <h5><b>Languages</b></h5>
            <ul>
              <li>Proficient: Python, C/C++, Java, Javascript</li>
              <li>Intermediate: HTML5, CSS, SQL, Perl, Bash</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h5><b>OS and Concepts</b></h5>
            <ul>
              <li>Familiar with Linux, OS X, and Windows</li>
              <li>Working knowledge of networking concepts (TCP/IP, UDP, etc.)</li>
              <li>Excellent understanding of OOP, design patterns, and agile methodology</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col m6 s12 skill-set">
            <h5><b>Web Development</b></h5>
            <ul>
              <li>In-depth knowledge of React and JQuery</li>
              <li>Experienced with Meteor and Node.js</li>
              <li>Strong knowledge of MySQL, MongoDB</li>
              <li>Experience in Materialize, Material UI, and Bootstrap</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h5><b>Others & Soft Skills</b></h5>
            <ul>
              <li>Experienced with Git</li>
              <li>Comfortable with Vim and IntelliJ</li>
              <li>Developed leadership skills through coordinating events in the university club</li>
              <li>Excellent group-working and communication skills developed through working with co-workers</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  renderWorkExperience() {
    return (
      <div>
        <div className="row">
          <div className="section-title z-depth-2">
            <h5><b>Work Experience</b></h5>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m6 s12 entry-title" style={style.entryTitleStyle}>
              <h5><b>Full Stack Developer</b></h5>
            </div>
            <div className="col m6 s12">
              <div className="right hide-on-small-only">
                <h5>April. 2016 - Present</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>April. 2016 - Present</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>Miovision Technologies Inc., Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>Design and implement an organizational management system with Facebook-like and LinkedIn-like
                features using Javascript, React, and MongoDB</li>
              <li>Implement visualizations of OKRs and organizational structures with D3.js</li>
              <li>Improve system performance by reducing loading time by 90%</li>
              <li>Participate in at least 40% of software architectural and database design</li>
            </ul>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m6 s12 entry-title" style={style.entryTitleStyle}>
              <h5><b>Software Engineer Co-op</b></h5>
            </div>
            <div className="col m6 s12">
              <div className="right hide-on-small-only">
                <h5>Aug. 2015 - Dec. 2015</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>Aug. 2015 - Dec. 2015</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>Dematic Limited, Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>Designed and implemented a system which collapses the configuration files from more than
                10,000 lines to approximately 4,000 lines and expands them back using Java</li>
              <li>Implemented automated deployment of the existing products and the third-party software,
                reducing the time to create and configure a testing server from hours to 30-35 minutes</li>
              <li>Implemented a system which analyzes and visualizes metrics using Node.js and D3.js</li>
            </ul>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m6 s12 entry-title" style={style.entryTitleStyle}>
              <h5><b>Software Developer Co-op</b></h5>
            </div>
            <div className="col m6 s12">
              <div className="right hide-on-small-only">
                <h5>Jan. 2015 - Apr. 2015</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>Jan. 2015 - Apr. 2015</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>NCR Canada Limited, Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>Designed and implemented the backend of an ATM testing framework using Perl</li>
              <li>Co-designed and implemented a GUI for monitoring and visualizing testing data</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  renderProjects() {
    return (
      <div>
        <div className="row">
          <div className="section-title z-depth-2">
            <h5><b>Projects</b></h5>
          </div>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Simple4Chat (ongoing) <a href="https://github.com/jeremychen0127/Simple4Chat" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Design and implement a chat-room-oriented messaging app</li>
            <li>Design and implement a tagging feature for chat rooms</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Tic-Tac-Toe with Unbeatable Player <a href="https://github.com/jeremychen0127/Tic_Tac_Toe" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented tic-tac-toe game using MVC architecture in C++</li>
            <li>Implemented an unbeatable AI player using minimax algorithm</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Tote (AngelHack) <a href="https://github.com/jeremychen0127/tote.git" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented mix-n-match for dressing</li>
            <li>Designed and implemented 95% of the UI components using React</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="entry-title" style={style.entryTitleStyle}>
              <h5><b>Building Buyer 7000 (Monopoly)</b></h5>
            </div>
          </div>

          <div className="row description">
            <ul>
              <li>Implemented the classNameic game, Monopoly, using C++</li>
              <li>Designed the implementation using UML and various design patterns including MVC, Decorator, and Factory Patterns</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  renderEducation() {
    return (
      <div>
        <div className="row">
          <div className="section-title z-depth-2">
            <h5><b>Education</b></h5>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m8 s12 entry-title" style={style.entryTitleStyle}>
              <h5><b>Candidate for Bachelor of Computer Science</b></h5>
            </div>
            <div className="col m4 s12">
              <div className="right hide-on-small-only">
                <h5>Sept. 2013 - Present</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>Sept. 2013 - Present</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>Co-operative Program, University of Waterloo, Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>GPA (US Scale): 4.0</li>
              <li>President's Scholarship of Distinction (95+)</li>
              <li>Math Faculty Scholarship</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  renderActivities() {
    return (
      <div>
        <div className="row">
          <div className="section-title z-depth-2">
            <h5><b>Activities</b></h5>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m8 s12 entry-title" style={style.entryTitleStyle}>
              <h5><b>Fellowship Executive (Coordinator & Chair)</b></h5>
            </div>
            <div className="col m4 s12">
              <div className="right hide-on-small-only">
                <h5>Jan. 2014 - Present</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>Jan. 2014 - Present</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>Mandarin Chinese Christian Fellowship, University of Waterloo, Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>Coordinate a highly functional co-worker team to achieve the goals of the fellowship and to run the fellowship smoothly</li>
              <li>Organize weekly activities of the fellowship and hold meetings with co-workers to finalize contents</li>
              <li>Co-lead the small group focusing on spiritual growth</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row resume fadeIn">
        <div className="col offset-l1 l10">
          <br />
          <Logo />
          {this.renderSummaryOfQualifications()}
          {this.renderWorkExperience()}
          {this.renderProjects()}
          {this.renderEducation()}
          {this.renderActivities()}
        </div>
      </div>
    );
  }
}