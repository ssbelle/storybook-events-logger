import React from 'react';
import addons from '@storybook/addons';
import {ADDON_ID, PANEL_ID} from './constants';
import { Panel } from './components/Panel';

// Register the addon with a unique name.
addons.register(ADDON_ID, api => {
  // Also need to set a unique name to the panel.
  addons.addPanel(PANEL_ID, {
    title: 'Events Logger',
    render: ({ active, key }) => <Panel key={key} api={api} active={active} />
  });
});
