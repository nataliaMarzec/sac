import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Empresa from './Empresa';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Empresa match={{params: {id: "1"}, isExact: true, path: "/empresas/:id", name: "Empresa detalles"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Lucas Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
