import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/Layout';
import Profile from '../../ui/pages/Profile';
import Internship from '../../ui/pages/Internship';
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

FlowRouter.route('/internship', {
  name: 'internship',
  action() {
    mount(Layout, {content: <Internship />});
  }
});

FlowRouter.route('/resume', {
  name: 'resume',
  action() {
    mount(Layout, {content: <Resume />});
  }
});