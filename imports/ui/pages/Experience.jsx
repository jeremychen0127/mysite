import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UnderConstruction from '../components/placeholder/UnderContruction';

import Expandable from '../components/experience/Expandable';

import Divider from 'material-ui/Divider';

// TODO: fetch from DB
const miovisionDescription =
  "I am working in a new project initiated by the management and organizational development teams. " +
  "They saw that the current market lacks of a system to manage and structure a company/organization well." +
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


export default class Experience extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="experience center fadeIn">
        <div>
          <h2 className="title center">Experience</h2>
          <p className="quote center"><i>"Practice does not make perfect, perfect practice makes perfect" - Vince Lombardi</i></p>
        </div>
        <br />
          <div className="row">
            <div className="center">
              <Expandable
                imgSrc="/img/miovision.png"
                description={miovisionDescription} />
            </div>
          </div>
          <Divider />
          <br />
          <div className="row">
            <Expandable
              imgSrc="/img/dematic.png"
              description={dematicDescription} />
          </div>
          <Divider />
          <br />
          <br />
          <div className="row">
            <Expandable
              imgSrc="/img/ncr.png"
              description={ncrDescription} />
          </div>
        <br />
      </div>
    );
  }
}

Experience.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};