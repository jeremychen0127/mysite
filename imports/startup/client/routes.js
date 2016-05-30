import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/Layout';
import AboutMe from '../../ui/pages/AboutMe';
import ProjectOverview from '../../ui/pages/ProjectOverview';
import Resume from '../../ui/pages/Resume';

FlowRouter.route('/', {
  name: 'projects',
  action() {
    mount(Layout, {content: <ProjectOverview />});
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(Layout, {content: <AboutMe />});
  }
});

FlowRouter.route('/resume', {
  name: 'resume',
  action() {
    mount(Layout, {content: <Resume />});
  }
});