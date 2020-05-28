import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Clientes from './Clientes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Clientes /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
