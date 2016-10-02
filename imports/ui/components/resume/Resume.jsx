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
              <li>Proficient: Python, C/C++, Java, JavaScript</li>
              <li>Intermediate: HTML5, CSS, SQL, Perl, Bash</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h5><b>OS and Concepts</b></h5>
            <ul>
              <li>Familiar with Linux, OS X, and Windows environments</li>
              <li>Working knowledge of networking concepts (TCP/IP, UDP, etc.)</li>
              <li>Excellent understanding of OOP, design patterns, and agile methodology</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col m6 s12 skill-set">
            <h5><b>Web Development</b></h5>
            <ul>
              <li>Experienced with AWS, Meteor, Node.js, React, and jQuery</li>
              <li>Strong knowledge of MySQL and MongoDB</li>
              <li>Experience in Materialize, Material UI, and Bootstrap</li>
            </ul>
          </div>

          <div className="col m6 s12 skill-set">
            <h5><b>Others & Soft Skills</b></h5>
            <ul>
              <li>Experienced with Git</li>
              <li>Developed leadership skills through coordinating events in the university club</li>
              <li>Demonstrated communication skills in working with product managers and UX designers</li>
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
                <h5>Apr. 2016 - Aug. 2016</h5>
              </div>
              <div className="hide-on-med-and-up">
                <h5>Apr. 2016 - Aug. 2016</h5>
              </div>
            </div>
          </div>

          <div className="row company" style={style.reducedBottomMargin}>
            <h5>Miovision Technologies Inc., Waterloo, ON</h5>
          </div>

          <div className="row description">
            <ul>
              <li>Designed and implemented tagging, searching, custom fields, role endorsement, and following and
                notification functionality of a real-time organizational management system using JavaScript, EC2, Meteor,
                Node.js, React, and MongoDB</li>
              <li>Implemented visualizations of OKRs and organizational structures using D3.js</li>
              <li>Improved system performance by reducing 90% of loading time by optimizing data requests and caching</li>
              <li>Minimalized the UI to ease the learning of the management system for new customers</li>
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
              <li>Improved the performance of product configuration by compressing configuration files to 40% using Java</li>
              <li>Implemented a system which analyzes and visualizes testing metrics to show the quantity and quality of
                product testing using Node.js and D3.js</li>
              <li>Implemented automated deployment to improve the efficiency and effectiveness of product testing by 70%</li>
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
              <li>Designed and implemented the parser of an ATM testing framework using Perl</li>
              <li>Designed and implemented a GUI for monitoring and visualizing testing data using HTML and CSS</li>
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
            <h5><b>Tote - AngelHack Hackathon <a href="https://github.com/jeremychen0127/tote.git" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented mix-and-match feature for dressing using JavaScript, Meteor, React, and MongoDB</li>
            <li>Designed and implemented 95% of the UI components of the application using React</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>JSON and XML Converter <a href="https://github.com/jeremychen0127/Json2Xml2Csv" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented a simple and efficient converter to convert JSON files to and from XML files</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Pokemon Go TSP <a href="https://github.com/jeremychen0127/PokemonGo-TSP" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Contributed to a system which generates efficient routes to collect pokemons using simulated annealing</li>
            <li>Implemented efficient cooling schedules to reduce final route length by hundreds of meters using Python</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Simple4Chat <a href="https://github.com/jeremychen0127/Simple4Chat" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented a chat-room-oriented messaging application using JavaScript, Meteor, React, and MongoDB</li>
          </ul>
        </div>

        <div className="section-entry">
          <div className="row entry-title" style={style.reducedBottomMargin}>
            <h5><b>Tic-Tac-Toe with Unbeatable Player <a href="https://github.com/jeremychen0127/Tic_Tac_Toe" target="_blank">@GitHub</a></b></h5>
          </div>
          <ul>
            <li>Implemented a tic-tac-toe game using MVC architecture in C++</li>
            <li>Implemented an unbeatable AI player using minimax algorithm</li>
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
              <li>Implemented the classic Monopoly game using C++</li>
              <li>Implemented various design patterns including MVC, Decorator, and Factory Patterns</li>
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
              <li>President's Research Award</li>
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
        </div>
      </div>
    );
  }
}