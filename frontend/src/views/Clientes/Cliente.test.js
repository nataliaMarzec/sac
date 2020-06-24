import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Cliente from './Cliente';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Cliente match={{params: {id: "1"}, isExact: true, path: "/clientes/:id", name: "Cliente hola details"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
