import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/Layout';
import Profile from '../../ui/pages/Profile';
import Experience from '../../ui/pages/Experience';
import Resume from '../../ui/pages/Resume';

FlowRouter.route('/', {
  name: 'index',
  triggersEnter: [function(context, redirect) {
    redirect('/profile');
  }]
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(Layout, {content: <Profile />});
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