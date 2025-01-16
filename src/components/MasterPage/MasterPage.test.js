import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from './MasterPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MasterPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});