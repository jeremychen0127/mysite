import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/Layout';
import AboutMe from '../../ui/pages/AboutMe';
import Experience from '../../ui/pages/Experience';
import Resume from '../../ui/pages/Resume';

FlowRouter.route('/', {
  name: 'index',
  triggersEnter: [function(context, redirect) {
    redirect('/about');
  }]
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(Layout, {content: <AboutMe />});
  }
});

FlowRouter.route('/experience', {
  name: 'experience',
  action() {
    mount(Layout, {content: <Experience />});
  }
});

FlowRouter.route('/resume', {
  name: 'resume',
  action() {
    mount(Layout, {content: <Resume />});
  }
});