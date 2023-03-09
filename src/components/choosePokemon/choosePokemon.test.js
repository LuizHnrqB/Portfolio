import React from 'react';
import ReactDOM from 'react-dom';
import ChoosePokemon from './ChoosePokemon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChoosePokemon />, div);
  ReactDOM.unmountComponentAtNode(div);
});