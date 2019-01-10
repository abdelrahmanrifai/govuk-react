import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Pagination from './';

describe('Pagination', () => {
  const wrapper = <Pagination>Example</Pagination>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
