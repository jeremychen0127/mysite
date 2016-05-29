import React, { Component } from 'react';

export default class Resume extends Component {
  renderSummaryOfQualifications() {
    return (
      <div className="section">
        <div className="section-title">
          <h3><b>Summary of Qualifications</b></h3>
        </div>

        <div className="skill-set">
          <h4><b>Languages</b></h4>
          <p>
            Proficient: Java, C/C++, Shell Script<br />
            Intermediate: HTML5, CSS, SQL, Python, Perl
          </p>
        </div>

        <div className="skill-set">
          <h4><b>OS and Tools</b></h4>
          <p>
            Familiar with Linux and Windows<br />
            Experience with Git, IntelliJ, and Vim
          </p>
        </div>

        <div className="skill-set">
          <h4><b>Frontend & Backend Development</b></h4>
          <p>
            Experience with Bootstrap<br />
            Good understanding of Django<br />
            Excellent at relational databases and NoSQL: MySQL, MariaDB, Cassandra
          </p>
        </div>

        <div className="skill-set">
          <h4><b>General Soft Skills</b></h4>
          <p>
            Detailed-oriented person who is willing to take responsibilities<br />
            Excellent group-working and communication skills
          </p>
        </div>
      </div>
    );
  }
  
  renderWorkExperience() {
    return (
      <div className="section">
        <div className="section-title">
          <h3><b>Work Experience</b></h3>
        </div>

        <div className="section-entry">
          <div className="entry-title">
            <h4><b>Software Developer Co-op</b></h4>
          </div>
          <div className="date">
            <h4>January 2015 - April 2015</h4>
          </div>
          <div className="company">
            <h4>NCR Canada Limited, Waterloo, ON</h4>
          </div>

          <ul>
            <li>Developed the service providing most of the functionality of the Test Manager Application digitizing ATM module testing process</li>
            <li>Designed and developed both back-end and front-end of the web pages for manipulating testing related data</li>
            <li>Created SQL stored procedures which process data entered in the web pages</li>
            <li>Communicated with teammates to optimize work distribution</li>
          </ul>
        </div>
        <div className="section-entry">
          <div className="entry-title">
            <h4><b>Restaurant Waiter</b></h4>
          </div>
          <div className="date">
            <h4>March 2013 - July 2013</h4>
          </div>
          <div className="company">
            <h4>Empire Garden Restaurant, Langley, BC</h4>
          </div>

          <ul>
            <li>Multitasked with kitchen work and customers' needs</li>
            <li>Achieved customers' satisfaction through excellent communication skills</li>
            <li>Placed orders and served with speed and politeness</li>
          </ul>
        </div>
      </div>
    );
  }
  
  renderProjects() {
    return (
      <div className="section">
        <div className="section-title">
          <h3><b>Projects</b></h3>
        </div>

        <div className="section-entry">
          <div className="entry-title">
            <h4><b>Building Buyer 7000 (Monopoly)</b></h4>
          </div>
          <ul>
            <li>Implemented the classNameic game, Monopoly, using C++</li>
            <li>Designed the implementation using UML and various design patterns including MVC, Decorator, and Factory Patterns</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="entry-title">
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
      <div className="section">
        <div className="section-title">
          <h3><b>Education</b></h3>
        </div>

        <div className="section-entry">
          <div className="entry-title">
            <h4><b>Candidate for Bachelor of Computer Science</b></h4>
          </div>
          <div className="date">
            <h4>September 2013 - Present</h4>
          </div>
          <div className="company">
            <h4>Co-operative Program, University of Waterloo, Waterloo, ON</h4>
          </div>

          <ul>
            <li>President's Scholarship of Distinction</li>
            <li>Math Faculty Entrance Scholarship</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="entry-title">
            <h4><b>British Columbia Secondary School Diploma</b></h4>
          </div>
          <div className="date">
            <h4>April 2011 - June 2013</h4>
          </div>
          <div className="company">
            <h4>Walnut Grove Secondary School, Langley, BC</h4>
          </div>
        </div>
      </div>
    );
  }
  
  renderActivities() {
    return (
      <div className="section">
        <div className="section-title">
          <h3><b>Activities</b></h3>
        </div>

        <div className="section-entry">
          <div className="entry-title">
            <h4><b>Fellowship Executive (Coordinator & Chair)</b></h4>
          </div>
          <div className="date">
            <h4>January 2014 - Present</h4>
          </div>
          <div className="company">
            <h4>Mandarin Chinese Christian Fellowship, University of Waterloo, Waterloo, ON</h4>
          </div>
          <ul>
            <li>Coordinate a highly functional co-worker team to achieve the goals of the fellowship and to run the fellowship smoothly</li>
            <li>Organize weekly activities of the fellowship and hold meetings with co-workers to finalize contents</li>
            <li>Co-lead the small group focusing on spiritual growth</li>
          </ul>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div>
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