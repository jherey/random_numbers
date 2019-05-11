import React from 'react';
import { shallow } from 'enzyme';

import Footer from '.';

describe('Footer component', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });
});
