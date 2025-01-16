import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
  ReactDOM.unmountComponentAtNode(div);
});