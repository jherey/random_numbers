import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '.';

describe('Header component', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
