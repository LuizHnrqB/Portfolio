import React from 'react';
import ReactDOM from 'react-dom';
import MatSandBox1 from './MatSandBox1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MatSandBox1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});