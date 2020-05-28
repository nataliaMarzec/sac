import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Usuario from './Usuario';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Usuario match={{params: {id: "1"}, isExact: true, path: "/usuarios/:id", name: "Usuario detalles"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
