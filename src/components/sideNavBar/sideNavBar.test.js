import React from 'react';
import ReactDOM from 'react-dom';
import SideNavBar from './SideNavBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});