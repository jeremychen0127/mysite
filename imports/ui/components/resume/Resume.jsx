import React, { Component } from 'react';
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
          <div className="section-title">
            <h3><b>Summary of Qualifications</b></h3>
          </div>
        </div>

        <div className="row">
          <div className="col m6 s12 skill-set">
            <h4><b>Languages</b></h4>
            <ul>
              <li>Proficient: Java, C/C++, Javascript</li>
              <li>Intermediate: HTML5, CSS, SQL, Python, Perl, Shell</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h4><b>OS and Tools</b></h4>
            <ul>
              <li>Familiar with Linux, OS X, and Windows</li>
              <li>Experienced with Git, IntelliJ, and Vim</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col m6 s12 skill-set">
            <h4><b>Web Development</b></h4>
            <ul>
              <li>Experience in Materialize, Material UI, and Bootstrap</li>
              <li>In-depth knowledge of React and JQuery</li>
              <li>Experienced with Meteor and Node.js</li>
              <li>Strong knowledge of MySQL, MongoDB</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h4><b>Software Engineering & Others</b></h4>
            <ul>
              <li>Familiar with TCP/IP concepts</li>
              <li>Excellent understanding of OOP, design patterns, and agile methodology</li>
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
          <div className="section-title">
            <h3><b>Work Experience</b></h3>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m6 s12 entry-title" style={style.entryTitleStyle}>
              <h4><b>Software Developer Co-op</b></h4>
            </div>
            <div className="col m6 s12">
              <div className="right hide-on-small-only">
                <h4>Jan. 2015 - Apr. 2015</h4>
              </div>
              <div className="hide-on-med-and-up">
                <h4>Jan. 2015 - Apr. 2015</h4>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h4>NCR Canada Limited, Waterloo, ON</h4>
          </div>

          <div className="row description">
            <ul>
              <li>Developed the service providing most of the functionality of the Test Manager Application digitizing ATM module testing process</li>
              <li>Designed and developed both back-end and front-end of the web pages for manipulating testing related data</li>
              <li>Created SQL stored procedures which process data entered in the web pages</li>
              <li>Communicated with teammates to optimize work distribution</li>
            </ul>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m6 s12 entry-title" style={style.entryTitleStyle}>
              <h4><b>Restaurant Waiter</b></h4>
            </div>
            <div className="col m6 s12">
              <div className="right hide-on-small-only">
                <h4>Mar. 2013 - Jul. 2013</h4>
              </div>
              <div className="hide-on-med-and-up">
                <h4>Mar. 2013 - Jul. 2013</h4>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h4>Empire Garden Restaurant, Langley, BC</h4>
          </div>

          <div className="row description">
            <ul>
              <li>Multitasked with kitchen work and customers' needs</li>
              <li>Achieved customers' satisfaction through excellent communication skills</li>
              <li>Placed orders and served with speed and politeness</li>
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
          <div className="section-title">
            <h3><b>Projects</b></h3>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="entry-title" style={style.entryTitleStyle}>
              <h4><b>Building Buyer 7000 (Monopoly)</b></h4>
            </div>
          </div>

          <div className="row description">
            <ul>
              <li>Implemented the classNameic game, Monopoly, using C++</li>
              <li>Designed the implementation using UML and various design patterns including MVC, Decorator, and Factory Patterns</li>
            </ul>
          </div>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h4><b>Personal Website <a href="https://github.com/jeremychen0127/mysite" target="_blank">@GitHub</a></b></h4>
          </div>
          <ul>
            <li>Designed and implemented my personal website using HTML, CSS, and JavaScript(JQuery)</li>
          </ul>
        </div>
      </div>
    );
  }
  
  renderEducation() {
    return (
      <div>
        <div className="row">
          <div className="section-title">
            <h3><b>Education</b></h3>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m8 s12 entry-title" style={style.entryTitleStyle}>
              <h4><b>Candidate for Bachelor of Computer Science</b></h4>
            </div>
            <div className="col m4 s12">
              <div className="right hide-on-small-only">
                <h4>Sept. 2013 - Present</h4>
              </div>
              <div className="hide-on-med-and-up">
                <h4>Sept. 2013 - Present</h4>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h4>Co-operative Program, University of Waterloo, Waterloo, ON</h4>
          </div>

          <div className="row description">
            <ul>
              <li>President's Scholarship of Distinction</li>
              <li>Math Faculty Entrance Scholarship</li>
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
          <div className="section-title">
            <h3><b>Activities</b></h3>
          </div>
        </div>

        <div className="section-entry">
          <div className="row" style={style.reducedBottomMargin}>
            <div className="col m8 s12 entry-title" style={style.entryTitleStyle}>
              <h4><b>Fellowship Executive (Coordinator & Chair)</b></h4>
            </div>
            <div className="col m4 s12">
              <div className="right hide-on-small-only">
                <h4>Jan. 2014 - Present</h4>
              </div>
              <div className="hide-on-med-and-up">
                <h4>Jan. 2014 - Present</h4>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h4>Mandarin Chinese Christian Fellowship, University of Waterloo, Waterloo, ON</h4>
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
      <div className="resume">
        <br />
        {this.renderSummaryOfQualifications()}
        {this.renderWorkExperience()}
        {this.renderProjects()}
        {this.renderEducation()}
        {this.renderActivities()}
      </div>
    );
  }
}