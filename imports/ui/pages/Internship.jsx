import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Expandable from '../components/experience/Expandable';

import Divider from 'material-ui/Divider';

// TODO: fetch from DB
const miovisionDescription =
  "I am working in a new project initiated by the management and organizational development teams. " +
  "They saw that the current market lacks of a system to manage and structure a company/organization well. " +
  "That led to the birth of Teal. It is a system that not only has OKR and HR functionality but also " +
  "acts like an internal LinkedIn and Facebook. I am very passionate about the project and have implemented " +
  "a lot of main selling points of the product.";

const dematicDescription =
  "I have touched a wide range of technologies this term. That's also when I touched some big data and Cassandra. " +
  "As well, I was working with a huge product configuration file and trying to design an algorithm to compress/expand " +
  "it. I also got a chance to code with Akka in Java. That's probably the most fun time during the work term as I had never " +
  "used an actor-based toolkit. Towards the end of the term, I started to work on some DevOps stuff which is using Ansible to " +
  "implement auto-deployment of servers for testing purposes. I wouldn't say it was the best work term but definitely learned a lot.";

const ncrDescription =
  "This was my first time working as a software developer. How exciting! I was working with some other co-ops to digitalize " +
  "the testing process of NCR's cheque processing ATM's. Back then, I knew little about programming. But I still made it! " +
  "I successfully implemented a testing framework/parser which worked very smoothly with testers. Although it was not something big, " +
  "it taught me how to do research and learn myself. Yes, from there, MY GEEK JOURNEY STARTED!";


export default class Internship extends Component {
  constructor(props) {
    super(props);

    this.state = { expandingSection: '' };

    this.handleExpandingSectionChange = (img) => this.setState({expandingSection: img});
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="experience center fadeIn">
        <div>
          <h2 className="title center">Internship</h2>
          <p className="quote center"><i>"Practice does not make perfect, perfect practice makes perfect" - Vince Lombardi</i></p>
        </div>
        <br />
          <div className="row">
            <div className="center hide-on-large-only">
              <Expandable
                imgSrc="/img/miovision.png"
                description={miovisionDescription}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={this.state.expandingSection === "/img/miovision.png"} />
            </div>
            <div className="center hide-on-med-and-down">
              <Expandable
                imgSrc="/img/miovision.png"
                description={miovisionDescription}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={true} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="center hide-on-large-only">
              <Expandable
                imgSrc="/img/dematic.png"
                description={dematicDescription}
                marginBelowPic={20}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={this.state.expandingSection === "/img/dematic.png"} />
            </div>
            <div className="center hide-on-med-and-down">
              <Expandable
                imgSrc="/img/dematic.png"
                description={dematicDescription}
                marginBelowPic={20}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={true} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="center hide-on-large-only">
              <Expandable
                imgSrc="/img/ncr.png"
                description={ncrDescription}
                marginBelowPic={20}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={this.state.expandingSection === "/img/ncr.png"} />
            </div>
            <div className="center hide-on-med-and-down">
              <Expandable
                imgSrc="/img/ncr.png"
                description={ncrDescription}
                marginBelowPic={20}
                handleExpandingSectionChange={this.handleExpandingSectionChange}
                isExpand={true} />
            </div>
          </div>
        <br />
      </div>
    );
  }
}

Internship.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};