import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/Layout';

FlowRouter.route('/', {
  name: 'overview',
  action() {
    mount(Layout, {content: <div />});
  }
});